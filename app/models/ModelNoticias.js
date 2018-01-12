function ModelNoticias(app){
    this._conexao = app.config.conexao();
}

ModelNoticias.prototype.getNoticias = function(callback){
    this._conexao.query('select * from noticias', callback);
}

ModelNoticias.prototype.getNoticia = function(callback){
    this._conexao.query('select * from noticias where idNoticia = 1;', callback);
}

ModelNoticias.prototype.salvarNoticia = function(noticia, callback){
    this._conexao.query('insert into noticias set ? ', noticia, callback)

}

module.exports = function(){
    return ModelNoticias;
}