class CardView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da CardView");
  }

  template(){
    return`

       <div class="divider"></div>
          <div class="section">
            <h5>IMAGE 1</h5>
            <p>Dados</p>
            <p>Descrição
            <a class="btn-floating btn-large waves-effect waves-light red "><i class="material-icons">delete</i></a>
            </p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h5>IMAGE 2</h5>
            <p>Dados</p>
            <p>Descrição
            <a class="btn-floating btn-large waves-effect waves-light red "><i class="material-icons">delete</i></a>
            </p>
         </div>
         <div class="divider"></div>
         <div class="section">
          <h5>IMAGE 3</h5>
          <p>Dados</p>
          <p>Descrição
          <a class="btn-floating btn-large waves-effect waves-light red "><i class="material-icons">delete</i></a>
          </p>

      </div>


     `;
  }


}
/*

<table class=" bordered responsive-table">
<thead>
<td>Nome</td>
<td>Quantidade</td>
<td>Valor</td>
<td>Total</td>
</thead>
<tbody>
<tr>
<td>IMAGE</td>
<td>Tablet miPad 18</td>
<td>1</td>
<td>499.99</td>
<td class="item-total">499.99</td>
<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a></td>
</tr>
<tr>
<td>IMAGE</td>
<td>Sapato</td>
<td>1</td>
<td>99.99</td>
<td class="item-total">99.99</td>
<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a></td>
</tr>
<tr>
<td>IMAGE</td>
<td>Monitor Sam 21</td>
<td>1</td>
<td>299.00</td>
<td class="item-total">299.00</td>
<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a></td>
</tr>
<tr>
<td>IMAGE</td>
<td>Teclado com fio preto </td>
<td>1</td>
<td>100.00</td>
<td class="item-total">100.00</td>
<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a></td>
</tr>
</tbody>
</table>
*/
