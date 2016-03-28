var connection = require('../connection');
function Pais() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_pais where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idpais,vtf_vch_nombre,vtf_bit_activo from tbl_vtf_pais where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idpais = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(pais, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_pais set ?', pais, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'PAIS creation failed'});
             } else {
                 res.send({status: 0, message: 'PAIS created successfully'});
             }
         });
     });
 };

 this.update = function(pais, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_pais set ? where vtf_int_idpais = ?', [pais, pais.vtf_int_idpais], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'PAIS update failed'});
             } else {
                 res.send({status: 0, message: 'PAIS updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_pais set vtf_bit_activo = 0 where vtf_int_idpais = ?', [id], function(err, result) {
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

module.exports = new Pais();

