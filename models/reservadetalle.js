var connection = require('../connection');
function Reservadetalle() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idreserva,vtf_int_idreservadetalle,vtf_int_idservicioempleado,vtf_dat_fechareserva,vtf_dec_precio,vtf_bit_activo from tbl_vtf_reservadetalle where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idreserva,vtf_int_idreservadetalle,vtf_int_idservicioempleado,vtf_dat_fechareserva,vtf_dec_precio,vtf_bit_activo from tbl_vtf_reservadetalle where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idreservadetalle = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(reservadetalle, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_reservadetalle set ?', reservadetalle, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'RESERVADETALLE creation failed'});
             } else {
                 res.send({status: 0, message: 'RESERVADETALLE created successfully'});
             }
         });
     });
 };

 this.update = function(reservadetalle, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_reservadetalle set ? where vtf_int_idreservadetalle = ?', [reservadetalle, reservadetalle.vtf_int_idreservadetalle], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'RESERVADETALLE update failed'});
             } else {
                 res.send({status: 0, message: 'RESERVADETALLE updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_reservadetalle set vtf_bit_activo = 0 where vtf_int_idreservadetalle = ?', [id], function(err, result) {
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

module.exports = new Reservadetalle();

