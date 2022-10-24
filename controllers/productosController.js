let productosController = {
    listado: function() {},
    crear: function() {},
    detalle: function(req, res) {
        res.send("Bienvenido al detalle del producto " + req.params.idProducto);
    
    },
    detalleComentarios: function(req, res){
        if (req.params.idComentario == undefined){
            res.send("Bienvenido a los comentarios del producto " + req.params.idProducto);
        } else{
            res.send("Bienvenido a los comentarios del producto " + req.params.idProducto + " y estás enfocado en el comentario " + req.params.idComentario);
        }
    }
};
module.exports = productosController;