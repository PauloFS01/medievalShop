class WeaponView extends View{
  constructor(elemento) {
    super(elemento);
    this._url = window.location.toString().split("?")[1];

  }

//criar metodo para buscar weapon na lista
//ps: id foi passado pela url.
//ps2: pode criar uma classe de infraestrutura e centralizar todas abuscas nela (reforando as buscas nas outras classes)
//cria metodo para extrair o id da url

  template(model){

    let teste = model.getById(this._url);
    console.log("Busca por id: " + this._url +" "+ teste);

    return`

      <div class="container">
        <div class="divider"></div>
        <div class="section">
          <h5><div><img src="${teste.enderreco}" class ='card-image'></div></h5>
          <p>${teste.descricao}</p>
          <p>${teste.preco}</p>
          <a href="shoppingCard.html?${teste.id}"class="waves-effect waves-light btn">Comprar</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>Section 2</h5>
          <p>Stuff</p>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>Section 3</h5>
          <p>Stuff</p>
        </div>
      </div>

      <footer class="page-footer blue-grey darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright blue-grey darken-4">
          <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>

     `;
  }

}
