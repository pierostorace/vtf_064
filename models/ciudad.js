var connection = require('../connection');
function Ciudad() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idciudad,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_ciudad where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idciudad,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_ciudad where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idciudad = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(ciudad, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_ciudad set ?', ciudad, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CIUDAD creation failed'});
             } else {
                 res.send({status: 0, message: 'CIUDAD created successfully'});
             }
         });
     });
 };

 this.update = function(ciudad, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_ciudad set ? where vtf_int_idciudad = ?', [ciudad, ciudad.vtf_int_idciudad], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'CIUDAD update failed'});
             } else {
                 res.send({status: 0, message: 'CIUDAD updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_ciudad set vtf_bit_activo = 0 where vtf_int_idciudad = ?', [id], function(err, result) {
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

module.exports = new Ciudad();

