class HomeView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da homewiew");
  }

  template(model){

    return`

    <div class="row header-produktliste container">
    ${model.weapons.map(n=>`

        <div class="col s12 m9 l4 ">
          <div class="card blue-grey darken-1 weaponCard small" >
          <a href="item.html?${n.id}">
            <div class="card-content white-text">
              <div><img src="${n.enderreco}" class ='card-image'></div>
                <div class="card-title">${n.descricao}</div>
                  <div class="card-action"><span class = 'price-used'>$ ${n.preco}</span></div>
              </div>
          </a>
            </div>
        </div>


      `).join('')}
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
/*
${model.negociacoes.map(n => `

                   <tr>
                       <td>${DateHelper.dataParaTexto(n.data)}</td>
                       <td>${n.quantidade}</td>
                       <td>${n.valor}</td>
                       <td>${n.volume}</td>
                   </tr>

               `).join('')}



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

*/
