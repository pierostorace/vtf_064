var connection = require('../connection');
function Local() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idlocal,vtf_int_idempresa,vtf_vch_nombrelocal,vtf_vch_dirección,vtf_int_idpais,vtf_int_idciudad,vtf_int_iddistrito,vtf_vch_imagengrande,vtf_vch_imagenpequena,vtf_pnt_geolocalizacion,vtf_bit_activo from tbl_vtf_local where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idlocal,vtf_int_idempresa,vtf_vch_nombrelocal,vtf_vch_dirección,vtf_int_idpais,vtf_int_idciudad,vtf_int_iddistrito,vtf_vch_imagengrande,vtf_vch_imagenpequena,vtf_pnt_geolocalizacion,vtf_bit_activo from tbl_vtf_local where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idlocal = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(local, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_local set ?', local, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'LOCAL creation failed'});
             } else {
                 res.send({status: 0, message: 'LOCAL created successfully'});
             }
         });
     });
 };

 this.update = function(local, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_local set ? where vtf_int_idlocal = ?', [local, local.vtf_int_idlocal], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'LOCAL update failed'});
             } else {
                 res.send({status: 0, message: 'LOCAL updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_local set vtf_bit_activo = 0 where vtf_int_idlocal = ?', [id], function(err, result) {
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

module.exports = new Local();

