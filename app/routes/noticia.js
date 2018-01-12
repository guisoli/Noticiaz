module.exports = function(app){
    app.get('/noticia', function(req,res){


    var modelNoticias = new app.app.models.ModelNoticias(app);

    modelNoticias.getNoticia(function(err, result){
        res.render('noticias/noticia', {noticia : result});
    });
    

    
});
}