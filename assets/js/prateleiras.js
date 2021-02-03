function carregaLivros(){
   $(".spinner").toggle();
   const navLendo = document.querySelector('#prateleira-lendo');
   const navQueroLer = document.querySelector('#prateleira-quero-ler');
   const navLer = document.querySelector('#prateleira-ler');
   const navpesquisa= document.querySelector('#prateleira-da-pesquisa');
   const tituloLivroPesquisado = document.querySelector("#tituloLivro");
   setTimeout(function(){
      getMyBooks().then(function(data) {
         navLendo.innerHTML = " ";
         navQueroLer.innerHTML = " ";
         navLer.innerHTML = " ";
         navpesquisa.innerHTML = " ";
         tituloLivroPesquisado.textContent = " ";
         const books = data.books;
         for (var i=0; i<books.length; i++){
            if(books[i].shelf == "currentlyReading"){
               if(books[i].imageLinks == null){
                  navLendo.appendChild(criandoCorpo(books[i].id, books[i].title, "../MyReads/assets/img/errorImg.png", books[i].authors))
               }else{
                  navLendo.appendChild(criandoCorpo(books[i].id, books[i].title, books[i].imageLinks.smallThumbnail, books[i].authors))
               }
            }
            if(books[i].shelf == "wantToRead"){
               if(books[i].imageLinks == null){
                  navQueroLer.appendChild(criandoCorpo(books[i].id, books[i].title, "../MyReads/assets/img/errorImg.png", books[i].authors))
               }else{
                  navQueroLer.appendChild(criandoCorpo(books[i].id, books[i].title, books[i].imageLinks.smallThumbnail, books[i].authors))
               }
            }
            if(books[i].shelf == "read"){
               if(books[i].imageLinks == null){
                  navLer.appendChild(criandoCorpo(books[i].id, books[i].title, "../MyReads/assets/img/errorImg.png", books[i].authors))
               }else{
                  navLer.appendChild(criandoCorpo(books[i].id, books[i].title, books[i].imageLinks.smallThumbnail, books[i].authors))
               }    
            }
         }
       })
       $(".spinner").hide();
   },2000);
}