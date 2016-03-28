var connection = require('../connection');
function Pin() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_vch_telefono,vtf_vch_fechapin,vtf_vch_pin,vtf_int_id from tbl_vtf_pin where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_vch_telefono,vtf_vch_fechapin,vtf_vch_pin,vtf_int_id from tbl_vtf_pin where ifnull(vtf_bit_activo,1) = 1 and vtf_vch_telefono = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(pin, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_pin set ?', pin, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'PIN creation failed'});
             } else {
                 res.send({status: 0, message: 'PIN created successfully'});
             }
         });
     });
 };

 this.update = function(pin, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_pin set ? where vtf_vch_telefono = ?', [pin, pin.vtf_vch_telefono], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'PIN update failed'});
             } else {
                 res.send({status: 0, message: 'PIN updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_pin set vtf_bit_activo = 0 where vtf_vch_telefono = ?', [id], function(err, result) {
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

module.exports = new Pin();

