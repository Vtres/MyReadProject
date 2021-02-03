const palavrasChave = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 
'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Computers', 'Cook', 'Cricket',
'Cycling','Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing',
'Dumas','Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness',
'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 
'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React',
'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 
'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

var modalBody = document.querySelector(".modal-body");
var divCerta = document.querySelector("#prateleira-da-pesquisa");

for (let index = 0; index < palavrasChave.length; index++) {
  modalBody.appendChild(criandoModal(palavrasChave[index], index));
}

var divMae = document.querySelectorAll(".categoria");

for(var i=0; i<divMae.length; i++) {
  var id = document.getElementById("categoria"+i);
  id.addEventListener("click", function(e){
        divClicada( e.target.id)
  })
}   
function divClicada(id) {
  $('.modal').modal('hide'); 
  $(".spinner").toggle();

  setTimeout(function(){
    
    var elemento = document.getElementById(id);
    var texto = elemento.textContent
    escondeP = document.querySelector("#esconde-p");
    escondeP.classList.add("esconde");

    var tituloLivro = document.querySelector("#tituloLivro");
    tituloLivro.textContent = `Pesquisando por: ${texto}`;
    tituloLivro.classList.remove("esconde");

    divCerta.innerHTML = " ";
    searchBooks(texto).then(function(data) {
      const books = data.books;
      for (let index = 0; index < books.length; index++) {
        if(books[index].imageLinks == null){
          divCerta.appendChild(criandoCorpo(books[index].id,books[index].title, "../MyReads/assets/img/errorImg.png", books[index].authors))
        }else{
          divCerta.appendChild(criandoCorpo(books[index].id,books[index].title, books[index].imageLinks.thumbnail, books[index].authors));
        }
      }
    });
    $(".spinner").hide();
  },1500);
}