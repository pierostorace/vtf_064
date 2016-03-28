var connection = require('../connection');
function Tipodocumento() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idtipodocumento,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_tipodocumento where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_int_idtipodocumento,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_tipodocumento where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idtipodocumento = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(tipodocumento, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_tipodocumento set ?', tipodocumento, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'TIPODOCUMENTO creation failed'});
             } else {
                 res.send({status: 0, message: 'TIPODOCUMENTO created successfully'});
             }
         });
     });
 };

 this.update = function(tipodocumento, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_tipodocumento set ? where vtf_int_idtipodocumento = ?', [tipodocumento, tipodocumento.vtf_int_idtipodocumento], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'TIPODOCUMENTO update failed'});
             } else {
                 res.send({status: 0, message: 'TIPODOCUMENTO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_tipodocumento set vtf_bit_activo = 0 where vtf_int_idtipodocumento = ?', [id], function(err, result) {
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

module.exports = new Tipodocumento();

