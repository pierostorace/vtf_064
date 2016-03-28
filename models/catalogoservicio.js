var connection = require('../connection');
function Catalogoservicio() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_int_idlocal,vtf_int_idcategoriaservicio,vtf_int_idservicio,vtf_vch_descripcion,vtf_int_puntospromedio,vtf_int_cantidadvaloraciones,vtf_bit_activo from tbl_vtf_catalogoservicio where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_int_idlocal,vtf_int_idcategoriaservicio,vtf_int_idservicio,vtf_vch_descripcion,vtf_int_puntospromedio,vtf_int_cantidadvaloraciones,vtf_bit_activo from tbl_vtf_catalogoservicio where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idservicio = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(catalogoservicio, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_catalogoservicio set ?', catalogoservicio, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CATALOGOSERVICIO creation failed'});
             } else {
                 res.send({status: 0, message: 'CATALOGOSERVICIO created successfully'});
             }
         });
     });
 };

 this.update = function(catalogoservicio, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_catalogoservicio set ? where vtf_int_idservicio = ?', [catalogoservicio, catalogoservicio.vtf_int_idservicio], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CATALOGOSERVICIO update failed'});
             } else {
                 res.send({status: 0, message: 'CATALOGOSERVICIO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_catalogoservicio set vtf_bit_activo = 0 where vtf_int_idservicio = ?', [id], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'Failed to delete'});
             } else {
                 res.send({status: 0, message: 'Deleted successfully'});
             }
         });
     });
 };

}

module.exports = new Catalogoservicio();

