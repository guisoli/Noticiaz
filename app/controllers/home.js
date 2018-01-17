module.exports.index = function(app, req, res){
    
    var con = app.config.conexao();
    var modelNoticias = new app.app.models.ModelNoticias(app);

    modelNoticias.get5UltimasNoticias(function(error, result){

        console.log(result);
        res.render('home/index', {noticias : result});
    });


}