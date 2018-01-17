function ModelNoticias(app){
    this._conexao = app.config.conexao();
}

ModelNoticias.prototype.getNoticias = function(callback){
    this._conexao.query('select * from noticias order by dataCriacao desc', callback);
}

ModelNoticias.prototype.getNoticia = function(idNoticia, callback){
    this._conexao.query('select * from noticias where idNoticia = '+ idNoticia.idNoticia +';', callback);
}

ModelNoticias.prototype.salvarNoticia = function(noticia, callback){
    this._conexao.query('insert into noticias set ? ', noticia, callback)

}

ModelNoticias.prototype.get5UltimasNoticias = function(callback){
    this._conexao.query('select * from noticias order by dataCriacao desc limit 5', callback);
}

module.exports = function(){
    return ModelNoticias;
}