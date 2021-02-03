$('body').on("change", ".option-shelf", function( event ) {
  var id = this.id;
  var opcao = this.value;
  updateBook({id}, opcao).then(function(data) {
    carregaLivros();
  })
});

    
