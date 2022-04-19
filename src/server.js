
varbodyParse = require('../node_modules/body-parser');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({​​​​​​​​extended:true}​​​​​​​​));

    

/*mysql*/
constMysql = newmysql({​​​​​​​​
    host:"localhost",
    user:"root",
    password:"",
    database:"pago"
}​​​​​​​​);
/*Fin mysql*/
 
/*Funcion para registrar */
app.post('/api/Info', function (req, res, next) {​​​​​​​​
Mysql.agregarInfo(req.body.n,req.body.t,req.body.p);
res.send('ok');
}​​​​​​​​);
/*Fin */

