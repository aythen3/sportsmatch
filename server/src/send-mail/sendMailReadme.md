# Módulo de Envío de Correos Electrónicos

El módulo de envío de correos electrónicos permite enviar correos electrónicos a los usuarios en diversas situaciones, como restablecimiento de contraseñas, notificaciones importantes y más. Aquí está la información clave sobre este módulo:

## Configuración

1. **Configuración del Servidor SMTP**:

   - El módulo utiliza un servidor SMTP para enviar correos electrónicos.
   - La configuración del servidor se encuentra en el archivo `.env`.
   - Asegúrate de proporcionar los siguientes detalles:
     - `MAIL_HOST`: Dirección del servidor SMTP.
     - `MAIL_USER`: Correo electrónico de origen (para autenticación).
     - `MAIL_PASS`: Contraseña del correo electrónico de origen.
     - `FROM`: Remitente.

2. **Plantillas de Correo Electrónico**:
   - Las plantillas de correo electrónico se definen en cada uno de los servicios donde se envia`.
   - Puedes personalizar estas plantillas según tus necesidades.
   - Asegúrate de seguir las convenciones de nombres y estructura.

## Funcionalidad

1. **Enviar Correo Electrónico**:

   - El controlador `SendMailController` maneja las solicitudes para enviar correos electrónicos.
   - Utiliza el servicio `SendMailService` para enviar correos electrónicos.

2. **Restablecimiento de Contraseña**:

   - El controlador `ResetCodeController` se encarga del proceso de restablecimiento de contraseñas.
   - Utiliza el servicio `ResetCodeService` para generar y enviar códigos de restablecimiento.

3. **Integración con TypeORM**:
   - El módulo utiliza `TypeOrmModule` para trabajar con las entidades `ResetCodeEntity` y `UserEntity`.

## Uso

1. **Instalación**:

   - Asegúrate de tener todas las dependencias instaladas.
   - Ejecuta `npm install` para instalar las dependencias necesarias.

2. **Configuración**:

   - Actualiza los valores en el archivo `.env`

3. **Ejemplo de Uso**:
   - Para enviar un correo electrónico, llama al controlador `SendMailController`.
   - Asegúrate de proporcionar los datos necesarios, como la dirección de destino y el contenido del correo.

# Servicio de Restablecimiento de Contraseña

Este documento proporciona una descripción detallada de los servicios ofrecidos por el módulo `ResetCodeService`, el cual es parte de una aplicación construida con NestJS. Este módulo se encarga de la gestión de códigos de restablecimiento de contraseña, permitiendo a los usuarios restablecer sus contraseñas de manera segura.

## Servicios Ofrecidos

El módulo `ResetCodeService` ofrece dos servicios principales:

### 1. Envío de Código de Restablecimiento de Contraseña

#### Descripción

Este servicio permite enviar un correo electrónico a un usuario con un código de restablecimiento de contraseña. El código es generado aleatoriamente y tiene una validez de 24 horas.

#### Método `sendResetCodeEmail`

#### Parámetros

- `email`: La dirección de correo electrónico del usuario al cual se enviará el código de restablecimiento.

#### Funcionamiento

1. Genera un código de restablecimiento de contraseña aleatorio.
2. Guarda el código generado en la base de datos junto con la dirección de correo electrónico y la fecha de expiración.
3. Envía un correo electrónico al usuario con el código de restablecimiento. El correo incluye, además del código, enlaces a las redes sociales de la plataforma y gráficos como el logo de la plataforma y los íconos de redes sociales.

#### Retorno

Devuelve un mensaje de éxito indicando que el correo ha sido enviado exitosamente.

### 2. Validación del Código de Restablecimiento de Contraseña

#### Descripción

Este servicio valida un código de restablecimiento de contraseña proporcionado por el usuario. Si el código es válido y no ha expirado, permite al usuario establecer una nueva contraseña.

#### Método `validateResetCode`

#### Parámetros

- `code`: El código de restablecimiento proporcionado por el usuario.
- `email`: La dirección de correo electrónico asociada al código de restablecimiento.
- `password`: La nueva contraseña que el usuario desea establecer.

#### Funcionamiento

1. Busca el código de restablecimiento en la base de datos utilizando el código y el correo electrónico proporcionados, asegurándose de que no haya expirado.
2. Si el código es válido, actualiza la contraseña del usuario en la base de datos.
3. Elimina el código de restablecimiento de la base de datos para evitar su reutilización.

#### Retorno

Devuelve un mensaje de éxito indicando que el código de restablecimiento es válido y la contraseña ha sido actualizada.

## Consideraciones

- Es importante asegurarse de que el servicio de correo electrónico esté correctamente configurado para permitir el envío de correos electrónicos.
- La seguridad y privacidad de los usuarios son prioritarias. Asegúrese de manejar la información personal y las contraseñas de manera segura.
