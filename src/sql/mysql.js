const mysql = require('mysql');
 
class Mysql {
    constructor(oConfig) {
        this.oConfig = oConfig;
    }
    agregarInfo(nombre,telefono,productos) {
        const conection = mysql.createConnection(this.oConfig);
        conection.connect(function (error) {
            try {
                if (error) {
                    console.log("Error al establecer la conexión a la BD -- " + error);
                } else {
                    console.log("conexión exitosa");
                    /*Registrar*/
                    conection.query(`insert into informacion(nombre,telefono,productos) values ('${nombre}','${telefono}','${productos}');`, function (err, rows) {
                        if (error) {
                            console.log("Error en insert de BD -- " + console.error());
                        } else {
                            console.log("MOTOTRUCO");
                        }
                    });
                }
            } catch (x) {
                console.log("Contacto.agregarInfo.connect --ERROR-- " + x);
            }
        });
    }
}
 
module.exports = Mysql;