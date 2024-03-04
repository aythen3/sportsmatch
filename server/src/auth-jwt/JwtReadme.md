# Módulo de Autenticación JWT

Este módulo proporciona funcionalidades de autenticación basadas en JWT (JSON Web Tokens) para la aplicación.

## Configuración

El módulo importa los siguientes módulos:

- `JwtModule`: Se importa con la configuración de secreto y tiempo de expiración.
- `TypeOrmModule`: Se importa para la entidad `UserEntity`.

## Funcionalidades

### Controladores

- `AuthJwtController`: Controlador utilizado para la autenticación JWT.

### Servicios

- `AuthJwtService`: Servicio proporcionado para la autenticación JWT.
- `UserService`: Servicio proporcionado para la gestión de usuarios.

# Servicio de Autenticación JWT (`AuthJwtService`)

Este servicio proporciona métodos para la autenticación y manejo de usuarios utilizando JSON Web Tokens (JWT) en una aplicación construida con NestJS.

## Métodos

### `signJWT`

Firma un JWT con el payload, secreto y tiempo de expiración proporcionados.

**Parámetros:**

- `payload`: El payload del JWT.
- `secret`: El secreto para firmar el JWT.
- `expires`: El tiempo de expiración del JWT, puede ser un número (segundos) o una cadena (formato de tiempo de `jsonwebtoken`).

**Retorna:** El JWT firmado como string.

### `loginValidate`

Valida el inicio de sesión comparando la contraseña proporcionada con la almacenada.

**Parámetros:**

- `user`: El usuario a validar.
- `password`: La contraseña proporcionada.

**Retorna:** Una promesa que resuelve al resultado del inicio de sesión. Si la contraseña es correcta, inicia sesión y retorna el resultado de `login(user)`.

### `verifyPassword`

Verifica la contraseña proporcionada con la almacenada en el usuario.

**Parámetros:**

- `user`: El usuario cuya contraseña se verificará.
- `password`: La contraseña proporcionada.

**Retorna:** Una promesa que resuelve a `true` si la contraseña es correcta, de lo contrario `false`.

### `login`

Inicia sesión firmando un JWT con el ID del usuario y el secreto proporcionado.

**Parámetros:**

- `user`: El usuario que iniciará sesión.

**Retorna:** Una promesa que resuelve al token de acceso y la información del usuario. Si el usuario está marcado como eliminado (`isDelete`), lanza una excepción.

## Uso

Para utilizar este servicio, primero debe ser inyectado en los controladores o servicios que requieran autenticación JWT. Esto permite la integración de funcionalidades de autenticación, como la validación de credenciales y la generación de tokens de acceso para usuarios autenticados.

# Auth JWT Controller

Este controlador de NestJS maneja las solicitudes de inicio de sesión y autenticación JWT.

## Método de Inicio de Sesión

El controlador proporciona un endpoint para que los usuarios inicien sesión y obtengan un token JWT.

### Endpoint

- `POST /auth/login`: Permite a los usuarios iniciar sesión proporcionando su correo electrónico y contraseña. Retorna un token JWT si las credenciales son válidas.

## Dependencias

El controlador utiliza los siguientes servicios de NestJS:

- `@nestjs/common`: Para los decoradores `Body`, `Controller` y `Post`.
- `./auth-jwt.service`: Para la lógica de autenticación JWT.
- `src/user/user.service`: Para la gestión de usuarios y la obtención del usuario por correo electrónico.

## Uso

Asegúrate de que la aplicación NestJS esté en funcionamiento para poder utilizar este controlador y realizar solicitudes HTTP al endpoint `/auth/login`.
