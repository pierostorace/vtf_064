var connection = require('../connection');
function Reserva() {

 this.get = function(res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idreserva,vtf_int_idusuario,vtf_dat_fechacreacionreserva,vtf_bit_activo from tbl_vtf_reserva where ifnull(vtf_bit_activo,1) = 1', function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.getById = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('select vtf_int_idreserva,vtf_int_idusuario,vtf_dat_fechacreacionreserva,vtf_bit_activo from tbl_vtf_reserva where ifnull(vtf_bit_activo,1) = 1 and vtf_int_idreserva = ?',[id], function(err, result) {
             con.release();
             res.send(result);
         });
     });
 };

 this.create = function(reserva, res) {
     connection.acquire(function(err, con) {
         con.query('insert into tbl_vtf_reserva set ?', reserva, function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'RESERVA creation failed'});
             } else {
                 res.send({status: 0, message: 'RESERVA created successfully'});
             }
         });
     });
 };

 this.update = function(reserva, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_reserva set ? where vtf_int_idreserva = ?', [reserva, reserva.vtf_int_idreserva], function(err, result) {
             con.release();
             if (err) {
                 res.send({status: 1, message: 'RESERVA update failed'});
             } else {
                 res.send({status: 0, message: 'RESERVA updated successfully'});
             }
         });
     });
 };

 this.delete = function(id, res) {
     connection.acquire(function(err, con) {
         con.query('update tbl_vtf_reserva set vtf_bit_activo = 0 where vtf_int_idreserva = ?', [id], function(err, result) {
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

module.exports = new Reserva();

