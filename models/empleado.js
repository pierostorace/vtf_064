var connection = require('../connection');
function Empleado() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_int_idlocal,vtf_int_idempleado,vtf_vch_nombre,vtf_vch_apellido,vtf_vch_nombreaplicacion,vtf_vch_email,vtf_vch_clave,vtf_bit_activo from tbl_vtf_empleado where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idempresa,vtf_int_idlocal,vtf_int_idempleado,vtf_vch_nombre,vtf_vch_apellido,vtf_vch_nombreaplicacion,vtf_vch_email,vtf_vch_clave,vtf_bit_activo from tbl_vtf_empleado where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idempleado = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(empleado, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_empleado set ?', empleado, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'EMPLEADO creation failed'});
             } else {
                 res.send({status: 0, message: 'EMPLEADO created successfully'});
             }
         });
     });
 };

 this.update = function(empleado, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_empleado set ? where vtf_int_idempleado = ?', [empleado, empleado.vtf_int_idempleado], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'EMPLEADO update failed'});
             } else {
                 res.send({status: 0, message: 'EMPLEADO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_empleado set vtf_bit_activo = 0 where vtf_int_idempleado = ?', [id], function(err, result) {
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

module.exports = new Empleado();

