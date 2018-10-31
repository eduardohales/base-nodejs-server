# Creacion de un REST server con nodejs y mongoDB

# Instrucciones

1. Instalar [mongoDB](https://www.mongodb.com/download-center?jmp=nav#community).
2. Instalar [Node.js](https://nodejs.org/es/).
3. `npm install` para instalar dependencias del proyecto.
4. `npm start` o `node server/server.js` para inicial la aplicación.
5. Crear una BD en [mLab](https://mlab.com/google/), y agregar un usuario.
6. Tambien se puede usar el servicio [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), pero tiene limitaciones
en comparación a mLab.
### Estructura

```
    .
    ├── server              # Archivos del servidor.
    │   ├── config          # Archivos de configuracion y variables de entorno.
    │   │   └── config.js   # Config. de PORT, ENV, etc.
    │   ├── model           # Schemas/esquemas de datos de la BD.
    │   │   └── user.js     # Estructura de datos de 'user'.
    │   ├── router          # Archivos con las vistas.
    │   │   └── user.js     # Vistas para el directorio '/usuario'
    │   └── server.js       # Aplicacion principal
    ├── package.json        # Archivo de paquetes npm.
    └── Readme.md
```

## FAQ

### Creación del archivo package.json

1. `npm init` para crear el package.json
2. `npm install express --save` para instalar modulo express.
3. `npm install body-parser --save` para poder conseguir de manera facil los datos enviados por formularios.
4. `npm install mongoose --save` para instalar libreria de trabajo con mongoDB.
5. `npm install mongoose-unique-validator --save` para modificar mensajes de error de inserciones en la base de datos.
6. `npm install bcrypt --save` para poder encriptar las contraseñas de usuario de la BD.
7. `npm install underscore --save` para poder filtrar objetos de manera mas eficiente.

### Como probar la aplicación

* Instalar [https://www.getpostman.com/apps](https://www.getpostman.com/apps) para enviar diferentes metodos HTTP.