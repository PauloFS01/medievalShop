class HomeView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da homewiew");
  }

  template(){
    return`
    <div class="row">

      <div class="col s4">
        <p class="produto">PRODUTO AQUI</p>
      </div>
      <div class="col s4">
        <pclass="produto">PRODUTO AQUI</p>
      </div>
      <div class="col s4">
        <pclass="produto">PRODUTO AQUI</p>
      </div>

    </div>
     `;
  }


}
