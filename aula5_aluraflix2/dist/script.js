function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  //value atribui o valor do campo, ele ignora a tag HTML e coloca apenas o valor do campo
  var filmeFavorito = campoFilmeFavorito.value
  
  if(filmeFavorito.endsWith('.jpg')){
    
  listarFilmesNaTela(filmeFavorito)
} else {
  alert("Imagem inválida")
}
  campoFilmeFavorito.value = ""
  }

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src =" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}