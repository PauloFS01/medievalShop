class HomeView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da homewiew");
  }

  template(){
    return`
        <table class="striped">
          <tbody>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
          <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
         </tr>
         <tr>
             <td>teste</td>
             <td>teste</td>
             <td>teste</td>
             <td>teste</td>
        </tr>
        <tr>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
       </tr>
         </tbody>
       </table>
     `;
  }


}
