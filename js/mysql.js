//modulo mysql
const mysql = require('mysql');

//crear conexion
const conection = mysql.createConnection({
    host:'localhost',
    user:'mushroom',
    password:'123456',
    database:'usuarios'
});

//conectarnos
conection.connect((err)=>{//recibe un error, y lo capturamos
    if(err) throw err
    console.log('la conexion funciona');
});

//creamos una query a la BD y retorna un posible error y columnas
conection.query('SELECT * FROM USUARIO', (err, rows)=>{
    if(err) throw err
    console.log('los datos de la tabla son:');
    console.log(rows);
    let usr = rows[2];
    console.log("🚀 ~ file: mysql.js ~ line 24 ~ conection.query ~ usr", usr.correo)
});


//cerrar la conexion
conection.end();