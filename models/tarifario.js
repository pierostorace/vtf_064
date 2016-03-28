var connection = require('../connection');
function Tarifario() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idtarifa,vtf_int_idservicio,vtf_dec_precio,vtf_dat_activodesde,vtf_dat_activohasta,vtf_bit_activo from tbl_vtf_tarifario where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idtarifa,vtf_int_idservicio,vtf_dec_precio,vtf_dat_activodesde,vtf_dat_activohasta,vtf_bit_activo from tbl_vtf_tarifario where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idtarifa = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(tarifario, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_tarifario set ?', tarifario, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'TARIFARIO creation failed'});
             } else {
                 res.send({status: 0, message: 'TARIFARIO created successfully'});
             }
         });
     });
 };

 this.update = function(tarifario, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_tarifario set ? where vtf_int_idtarifa = ?', [tarifario, tarifario.vtf_int_idtarifa], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'TARIFARIO update failed'});
             } else {
                 res.send({status: 0, message: 'TARIFARIO updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_tarifario set vtf_bit_activo = 0 where vtf_int_idtarifa = ?', [id], function(err, result) {
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

module.exports = new Tarifario();

