var connection = require('../connection');
function Distrito() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idciudad,vtf_int_iddistrito,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_distrito where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idciudad,vtf_int_iddistrito,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_distrito where ifnull(vtf_bit_activo,1) = 1 and vtf_int_iddistrito = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(distrito, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_distrito set ?', distrito, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'DISTRITO creation failed'});
             } else {
                 res.send({status: 0, message: 'DISTRITO created successfully'});
             }
         });
     });
 };

 this.update = function(distrito, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_distrito set ? where vtf_int_iddistrito = ?', [distrito, distrito.vtf_int_iddistrito], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'DISTRITO update failed'});
             } else {
                 res.send({status: 0, message: 'DISTRITO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_distrito set vtf_bit_activo = 0 where vtf_int_iddistrito = ?', [id], function(err, result) {
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

module.exports = new Distrito();

