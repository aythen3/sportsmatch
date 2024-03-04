# Documentación del Controlador de Usuario

Este controlador maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para los usuarios.

## Endpoints

### Crear Usuario

- **Método:** POST
- **Ruta:** /user
- **Body:** Objeto CreateUserDto
- **Descripción:** Crea un nuevo usuario.

### Obtener Todos los Usuarios

- **Método:** GET
- **Ruta:** /user
- **Descripción:** Obtiene todos los usuarios.

### Obtener un Usuario por ID

- **Método:** GET
- **Ruta:** /user/:id
- **Parámetros de Ruta:** ID del usuario
- **Descripción:** Obtiene un usuario específico por su ID.

### Actualizar Usuario

- **Método:** PATCH
- **Ruta:** /user/:id
- **Parámetros de Ruta:** ID del usuario
- **Body:** Objeto UpdateUserDto
- **Descripción:** Actualiza un usuario existente.

### Eliminar Usuario

- **Método:** DELETE
- **Ruta:** /user/:id
- **Parámetros de Ruta:** ID del usuario
- **Descripción:** Elimina un usuario por su ID.

# Servicio de Usuario

Este servicio proporciona funcionalidades para interactuar con los datos de usuario en la aplicación.

## Métodos

### create(createUserDto: CreateUserDto): Promise<UserEntity>

Crea un nuevo usuario con los datos proporcionados.

- `createUserDto`: Datos del usuario a crear.

### findAll(): Promise<UserEntity[]>

Recupera todos los usuarios que no están marcados como eliminados.

### findOne(id: string): Promise<UserEntity>

Recupera un usuario por su ID.

- `id`: ID del usuario a buscar.

### update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity>

Actualiza la información de un usuario por su ID.

- `id`: ID del usuario a actualizar.
- `updateUserDto`: Datos a actualizar para el usuario.

### remove(id: string): Promise<UserEntity>

Marca un usuario como eliminado en la base de datos.

- `id`: ID del usuario a eliminar.

## Uso

1. Importa la clase `UserService` desde `user.service.ts`.
2. Crea una instancia de `UserService`.
3. Llama a los métodos proporcionados por el servicio según sea necesario.

## Dependencias

- `@nestjs/common`
- `@nestjs/typeorm`
- `bcrypt`
- `typeorm`
