var criandoCorpo = (id, titulo, imagem, autor) => {
    // let classes = ["row", "pb-3", "justify-content-center"];
    var corpo = document.createElement("div");
    corpo.classList.add("oculta");
       var esqueleto = `
          <div class="card p-0  col-12 col-md-3 col-lg-6 borda">
             <img class="card-img-top card-image" id="cover-book" src="${imagem}"
                alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title" id="title-book">${titulo}</h5>
                  <p class="card-text" id="author_book">${autor}</p>
                  
                  <button type="button" id="${id}" class="btn btn-success look-book btn-clicado" data-toggle="modal" data-target="#getBooksModal">
                     Ver livro
                  </button>
                  <div class="option-book ">
                     <select id="${id}" class="option-shelf ">
                        <option >Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                     </select>
                  </div>
                  
                </div>
          </div>`;
   
   corpo.innerHTML = esqueleto;
   return corpo;
}

var criandoModal = (chave="None",numero) =>{
   var corpo = document.createElement("div");
   var esqueleto = `
      <div class="categoria"><h6 id="categoria${numero}">${chave}</h6></div>
   `;

   corpo.innerHTML = esqueleto;
   return corpo;
}

var getBookModal = (titulo, imagem, linguagem, paginas, data, autor, descricao) =>{
   var corpo = document.createElement("div");
   var esqueleto = `
   <div class="container detalheLivro">
      <div class="infoLivro">
         <img src="${imagem}" alt="imgCapa">
         <h1>${titulo}</h1>
         <p>Linguagem: ${linguagem}</p>
         <p>N° de páginas: ${paginas}</p>
         <p>Data de publicação: ${data}</p>
      </div>

      <div class="conteudoLivro">
         <h5>Autor(es)</h5>
         <p>${autor}</p>
         <h5>Descrição do Livro</h5>
         <p>${descricao}</p>
      </div>
   </div>
   `;

   corpo.innerHTML = esqueleto;
   return corpo;
}