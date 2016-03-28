var connection = require('../connection');
function Categoriaservicio() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idcategoriaservicio,vtf_vch_nombre,vtf_bit_acivo from tbl_vtf_categoriaservicio where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idcategoriaservicio,vtf_vch_nombre,vtf_bit_acivo from tbl_vtf_categoriaservicio where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idcategoriaservicio = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(categoriaservicio, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_categoriaservicio set ?', categoriaservicio, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CATEGORIASERVICIO creation failed'});
             } else {
                 res.send({status: 0, message: 'CATEGORIASERVICIO created successfully'});
             }
         });
     });
 };

 this.update = function(categoriaservicio, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_categoriaservicio set ? where vtf_int_idcategoriaservicio = ?', [categoriaservicio, categoriaservicio.vtf_int_idcategoriaservicio], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CATEGORIASERVICIO update failed'});
             } else {
                 res.send({status: 0, message: 'CATEGORIASERVICIO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_categoriaservicio set vtf_bit_activo = 0 where vtf_int_idcategoriaservicio = ?', [id], function(err, result) {
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

module.exports = new Categoriaservicio();

