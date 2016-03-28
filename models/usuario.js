var connection = require('../connection');
function Usuario() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idusuario,vtf_vch_nombre,vtf_vch_apellido,vtf_vch_telefono,vtf_vch_correo,vtf_int_ciudadtrabajo,vtf_int_distritotrabajo,vtf_int_ciudadvive,vtf_int_distritovive,vtf_dat_fechanacimiento,vtf_vch_usuario,vtf_vch_clave,vtf_bit_activo from tbl_vtf_usuario where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idusuario,vtf_vch_nombre,vtf_vch_apellido,vtf_vch_telefono,vtf_vch_correo,vtf_int_ciudadtrabajo,vtf_int_distritotrabajo,vtf_int_ciudadvive,vtf_int_distritovive,vtf_dat_fechanacimiento,vtf_vch_usuario,vtf_vch_clave,vtf_bit_activo from tbl_vtf_usuario where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idusuario = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(usuario, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_usuario set ?', usuario, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'USUARIO creation failed'});
             } else {
                 res.send({status: 0, message: 'USUARIO created successfully'});
             }
         });
     });
 };

 this.update = function(usuario, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_usuario set ? where vtf_int_idusuario = ?', [usuario, usuario.vtf_int_idusuario], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'USUARIO update failed'});
             } else {
                 res.send({status: 0, message: 'USUARIO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_usuario set vtf_bit_activo = 0 where vtf_int_idusuario = ?', [id], function(err, result) {
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

module.exports = new Usuario();

