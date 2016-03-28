var connection = require('../connection');
function Empresa() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_vch_razonsocial,vtf_vch_nombrecomercial,vtf_int_idtipodocumento,vtf_vch_numerodocumento,vtf_bit_activo from tbl_vtf_empresa where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_vch_razonsocial,vtf_vch_nombrecomercial,vtf_int_idtipodocumento,vtf_vch_numerodocumento,vtf_bit_activo from tbl_vtf_empresa where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idempresa = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(empresa, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_empresa set ?', empresa, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'EMPRESA creation failed'});
             } else {
                 res.send({status: 0, message: 'EMPRESA created successfully'});
             }
         });
     });
 };

 this.update = function(empresa, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_empresa set ? where vtf_int_idempresa = ?', [empresa, empresa.vtf_int_idempresa], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'EMPRESA update failed'});
             } else {
                 res.send({status: 0, message: 'EMPRESA updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_empresa set vtf_bit_activo = 0 where vtf_int_idempresa = ?', [id], function(err, result) {
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

module.exports = new Empresa();

