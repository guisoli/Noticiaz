module.exports.noticia = function(app, req, res){
    var modelNoticias = new app.app.models.ModelNoticias(app);

    modelNoticias.getNoticia(function(err, result){
        res.render('noticias/noticia', {noticia : result});
    });
    
}

module.exports.noticias = function(app, req, res){
    var modelNoticias = new app.app.models.ModelNoticias(app);
    
    modelNoticias.getNoticias(function(err, result){
        res.render('noticias/noticias', {noticias : result});
    });
  
}