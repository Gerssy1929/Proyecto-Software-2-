const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos Conectada');
    } catch (error) {
        console.log('Ha ocurrido un error al intertar conectarse a la Base de Datos')
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;