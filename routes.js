var catalogoservicio = require('./models/catalogoservicio');
var categoriaservicio = require('./models/categoriaservicio');
var ciudad = require('./models/ciudad');
var distrito = require('./models/distrito');
var empleado = require('./models/empleado');
var empresa = require('./models/empresa');
var local = require('./models/local');
var pais = require('./models/pais');
var pin = require('./models/pin');
var reserva = require('./models/reserva');
var reservadetalle = require('./models/reservadetalle');
var servicioempleado = require('./models/servicioempleado');
var tarifario = require('./models/tarifario');
var tipodocumento = require('./models/tipodocumento');
var usuario = require('./models/usuario');

module.exports = {
 configure: function(app) {

/***************************************************************************************************************
*****************************************CATALOGOSERVICIO CRUD ********************************************
***************************************************************************************************************/

     app.get('/catalogoservicio/', function(req, res) {
         catalogoservicio.get(res);
     });

     app.get('/catalogoservicio/:id/', function(req, res) {
         catalogoservicio.getById(req.params.id, res);
     });

     app.post('/catalogoservicio/', function(req, res) {
         catalogoservicio.create(req.body, res);
     });

     app.put('/catalogoservicio/', function(req, res) {
         catalogoservicio.update(req.body, res);
     });

     app.delete('/catalogoservicio/:id/', function(req, res) {
         catalogoservicio.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************CATEGORIASERVICIO CRUD ********************************************
***************************************************************************************************************/

     app.get('/categoriaservicio/', function(req, res) {
         categoriaservicio.get(res);
     });

     app.get('/categoriaservicio/:id/', function(req, res) {
         categoriaservicio.getById(req.params.id, res);
     });

     app.post('/categoriaservicio/', function(req, res) {
         categoriaservicio.create(req.body, res);
     });

     app.put('/categoriaservicio/', function(req, res) {
         categoriaservicio.update(req.body, res);
     });

     app.delete('/categoriaservicio/:id/', function(req, res) {
         categoriaservicio.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************CIUDAD CRUD ********************************************
***************************************************************************************************************/

     app.get('/ciudad/', function(req, res) {
         ciudad.get(res);
     });

     app.get('/ciudad/:id/', function(req, res) {
         ciudad.getById(req.params.id, res);
     });

     app.post('/ciudad/', function(req, res) {
         ciudad.create(req.body, res);
     });

     app.put('/ciudad/', function(req, res) {
         ciudad.update(req.body, res);
     });

     app.delete('/ciudad/:id/', function(req, res) {
         ciudad.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************DISTRITO CRUD ********************************************
***************************************************************************************************************/

     app.get('/distrito/', function(req, res) {
         distrito.get(res);
     });

     app.get('/distrito/:id/', function(req, res) {
         distrito.getById(req.params.id, res);
     });

     app.post('/distrito/', function(req, res) {
         distrito.create(req.body, res);
     });

     app.put('/distrito/', function(req, res) {
         distrito.update(req.body, res);
     });

     app.delete('/distrito/:id/', function(req, res) {
         distrito.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************EMPLEADO CRUD ********************************************
***************************************************************************************************************/

     app.get('/empleado/', function(req, res) {
         empleado.get(res);
     });

     app.get('/empleado/:id/', function(req, res) {
         empleado.getById(req.params.id, res);
     });

     app.post('/empleado/', function(req, res) {
         empleado.create(req.body, res);
     });

     app.put('/empleado/', function(req, res) {
         empleado.update(req.body, res);
     });

     app.delete('/empleado/:id/', function(req, res) {
         empleado.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************EMPRESA CRUD ********************************************
***************************************************************************************************************/

     app.get('/empresa/', function(req, res) {
         empresa.get(res);
     });

     app.get('/empresa/:id/', function(req, res) {
         empresa.getById(req.params.id, res);
     });

     app.post('/empresa/', function(req, res) {
         empresa.create(req.body, res);
     });

     app.put('/empresa/', function(req, res) {
         empresa.update(req.body, res);
     });

     app.delete('/empresa/:id/', function(req, res) {
         empresa.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************LOCAL CRUD ********************************************
***************************************************************************************************************/

     app.get('/local/', function(req, res) {
         local.get(res);
     });

     app.get('/local/:id/', function(req, res) {
         local.getById(req.params.id, res);
     });

     app.post('/local/', function(req, res) {
         local.create(req.body, res);
     });

     app.put('/local/', function(req, res) {
         local.update(req.body, res);
     });

     app.delete('/local/:id/', function(req, res) {
         local.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************PAIS CRUD ********************************************
***************************************************************************************************************/

     app.get('/pais/', function(req, res) {
         pais.get(res);
     });

     app.get('/pais/:id/', function(req, res) {
         pais.getById(req.params.id, res);
     });

     app.post('/pais/', function(req, res) {
         pais.create(req.body, res);
     });

     app.put('/pais/', function(req, res) {
         pais.update(req.body, res);
     });

     app.delete('/pais/:id/', function(req, res) {
         pais.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************PIN CRUD ********************************************
***************************************************************************************************************/

     app.get('/pin/', function(req, res) {
         pin.get(res);
     });

     app.get('/pin/:id/', function(req, res) {
         pin.getById(req.params.id, res);
     });

     app.post('/pin/', function(req, res) {
         pin.create(req.body, res);
     });

     app.put('/pin/', function(req, res) {
         pin.update(req.body, res);
     });

     app.delete('/pin/:id/', function(req, res) {
         pin.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************RESERVA CRUD ********************************************
***************************************************************************************************************/

     app.get('/reserva/', function(req, res) {
         reserva.get(res);
     });

     app.get('/reserva/:id/', function(req, res) {
         reserva.getById(req.params.id, res);
     });

     app.post('/reserva/', function(req, res) {
         reserva.create(req.body, res);
     });

     app.put('/reserva/', function(req, res) {
         reserva.update(req.body, res);
     });

     app.delete('/reserva/:id/', function(req, res) {
         reserva.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************RESERVADETALLE CRUD ********************************************
***************************************************************************************************************/

     app.get('/reservadetalle/', function(req, res) {
         reservadetalle.get(res);
     });

     app.get('/reservadetalle/:id/', function(req, res) {
         reservadetalle.getById(req.params.id, res);
     });

     app.post('/reservadetalle/', function(req, res) {
         reservadetalle.create(req.body, res);
     });

     app.put('/reservadetalle/', function(req, res) {
         reservadetalle.update(req.body, res);
     });

     app.delete('/reservadetalle/:id/', function(req, res) {
         reservadetalle.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************SERVICIOEMPLEADO CRUD ********************************************
***************************************************************************************************************/

     app.get('/servicioempleado/', function(req, res) {
         servicioempleado.get(res);
     });

     app.get('/servicioempleado/:id/', function(req, res) {
         servicioempleado.getById(req.params.id, res);
     });

     app.post('/servicioempleado/', function(req, res) {
         servicioempleado.create(req.body, res);
     });

     app.put('/servicioempleado/', function(req, res) {
         servicioempleado.update(req.body, res);
     });

     app.delete('/servicioempleado/:id/', function(req, res) {
         servicioempleado.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************TARIFARIO CRUD ********************************************
***************************************************************************************************************/

     app.get('/tarifario/', function(req, res) {
         tarifario.get(res);
     });

     app.get('/tarifario/:id/', function(req, res) {
         tarifario.getById(req.params.id, res);
     });

     app.post('/tarifario/', function(req, res) {
         tarifario.create(req.body, res);
     });

     app.put('/tarifario/', function(req, res) {
         tarifario.update(req.body, res);
     });

     app.delete('/tarifario/:id/', function(req, res) {
         tarifario.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************TIPODOCUMENTO CRUD ********************************************
***************************************************************************************************************/

     app.get('/tipodocumento/', function(req, res) {
         tipodocumento.get(res);
     });

     app.get('/tipodocumento/:id/', function(req, res) {
         tipodocumento.getById(req.params.id, res);
     });

     app.post('/tipodocumento/', function(req, res) {
         tipodocumento.create(req.body, res);
     });

     app.put('/tipodocumento/', function(req, res) {
         tipodocumento.update(req.body, res);
     });

     app.delete('/tipodocumento/:id/', function(req, res) {
         tipodocumento.delete(req.params.id, res);
     });



/***************************************************************************************************************
*****************************************USUARIO CRUD ********************************************
***************************************************************************************************************/

     app.get('/usuario/', function(req, res) {
         usuario.get(res);
     });

     app.get('/usuario/:id/', function(req, res) {
         usuario.getById(req.params.id, res);
     });

     app.post('/usuario/', function(req, res) {
         usuario.create(req.body, res);
     });

     app.put('/usuario/', function(req, res) {
         usuario.update(req.body, res);
     });

     app.delete('/usuario/:id/', function(req, res) {
         usuario.delete(req.params.id, res);
     });


 }
};
