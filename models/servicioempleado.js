var connection = require('../connection');
function Servicioempleado() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idservicioempleado,vtf_int_idempresa,vtf_int_idlocal,vtf_int_idservicio,vtf_int_idempleado,vtf_bit_activo from tbl_vtf_servicioempleado where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idservicioempleado,vtf_int_idempresa,vtf_int_idlocal,vtf_int_idservicio,vtf_int_idempleado,vtf_bit_activo from tbl_vtf_servicioempleado where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idservicioempleado = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(servicioempleado, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_servicioempleado set ?', servicioempleado, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'SERVICIOEMPLEADO creation failed'});
             } else {
                 res.send({status: 0, message: 'SERVICIOEMPLEADO created successfully'});
             }
         });
     });
 };

 this.update = function(servicioempleado, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_servicioempleado set ? where vtf_int_idservicioempleado = ?', [servicioempleado, servicioempleado.vtf_int_idservicioempleado], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'SERVICIOEMPLEADO update failed'});
             } else {
                 res.send({status: 0, message: 'SERVICIOEMPLEADO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_servicioempleado set vtf_bit_activo = 0 where vtf_int_idservicioempleado = ?', [id], function(err, result) {
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

module.exports = new Servicioempleado();

