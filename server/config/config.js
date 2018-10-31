/*
 * Archivo con las configuraciones de conexiones.
 */

// --- Configuracion servidor
process.env.PORT = process.env.PORT || 8080;


// --- Entorno ---
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// process.env.NODE_ENV = 'mlab';


// --- Configuracion Base de datos ---
let urlDB;

if (process.env.NODE_ENV === 'dev')
    urlDB = 'mongodb://localhost:27017/REST-database';
if (process.env.NODE_ENV === 'mlab')
    urlDB = 'mongodb://rest-user:rest123@ds263161.mlab.com:63161/rest-tutorial';
if (process.env.NODE_ENV === 'atlas')
    urlDB = 'mongodb://rest-user:rest123@rest-tutorial-shard-00-00-ec4ki.gcp.mongodb.net:27017,rest-tutorial-shard-00-01-ec4ki.gcp.mongodb.net:27017,rest-tutorial-shard-00-02-ec4ki.gcp.mongodb.net:27017/test?ssl=true&replicaSet=rest-tutorial-shard-0&authSource=admin&retryWrites=true';

process.env.URLDB = urlDB;