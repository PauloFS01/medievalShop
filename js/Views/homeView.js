class HomeView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da homewiew");
  }

  template(model){
    return`

    <div class="row header-produktliste">
    ${model.weapons.map(n=>`
        <div class="col s12 m9 l4">
          <div class="card blue-grey darken-1 weaponCard ">
            <div class="card-content white-text">
              <div><img src="${n.enderreco}" class ='img'></div>
                <div class="card-content">${n.descricao}</div>
                  <div class="card-action"><span class = 'price-used'>$ ${n.preco}</span></div>
              </div>
            </div>
        </div>
      `).join('')}
    </div>

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
