module.exports = function(app){
    app.get('/noticias', function(req,res){
       
    var modelNoticias = new app.app.models.ModelNoticias(app);

    modelNoticias.getNoticias(function(err, result){
        res.render('noticias/noticias', {noticias : result});
    });

        

        
});
}