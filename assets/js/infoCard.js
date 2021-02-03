$('body').on("click", ".btn-clicado", function( event ) {
    var modalLivro = document.querySelector("#corpo-livro");
    var id = $(this).attr("id");
    modalLivro.innerHTML = " ";

    getBook(id).then(function(data) {
        const book = data.book
        var imagem = book.imageLinks;
        var descricao = book.description;
        if(imagem == null && descricao == null){
            modalLivro.appendChild(getBookModal(book.title, "../MyReads/assets/img/errorImg.png", book.language, book.pageCount, book.publishedDate,book.authors, "Livro sem descrição"));
        }else
        if(imagem == null){
            modalLivro.appendChild(getBookModal(book.title, "../MyReads/assets/img/errorImg.png", book.language, book.pageCount, book.publishedDate,book.authors, book.description));
        }else if(descricao == null){
            modalLivro.appendChild(getBookModal(book.title, book.imageLinks.smallThumbnail, book.language, book.pageCount, book.publishedDate,book.authors, "Livro sem descrição"));
        }else{
            modalLivro.appendChild(getBookModal(book.title, book.imageLinks.smallThumbnail, book.language, book.pageCount, book.publishedDate,book.authors, book.description));

        }
        
    })
});







// $('body').on("click", ".card", function( event ) {
//     $(this).find(".option-shelf").each(function() {
//         var id = $(this).attr("id"); 
//         console.log(document.querySelector("main"));
//     });
// });