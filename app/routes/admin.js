module.exports = function(app){
      app.get('/formulario_inclusao_noticia', function(req, res){
      res.render('admin/form_add_noticia', { validacao : {}, noticia : {} });
    });

    app.post('/noticias/salvar', function(req, res){
      var noticia = req.body;

      req.assert('titulo', 'Título é obrigatório').notEmpty();
      req.assert('resumo', 'Resumo é obrigatório').notEmpty();
      req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
      req.assert('autor', 'Autor é obrigatório').notEmpty();
      req.assert('dataNoticia', 'Data é obrigatório').notEmpty();
      req.assert('noticia', 'Notícia é obrigatório').notEmpty();

      var erros = req.validationErrors();

      if(erros){
          res.render('admin/form_add_noticia', {validacao : erros,  noticia : noticia});
          return;
      }

      var modelNoticias = new app.app.models.ModelNoticias(app);
  
      modelNoticias.salvarNoticia(noticia, function(err, result){
        console.log('salvou daora');
        
        res.redirect('/noticias');
      });
    });

};
