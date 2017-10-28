class WeaponView extends View{
  constructor(elemento) {
    super(elemento);
    console.log("testando construtor da WeaponView");
  }

  template(){
    return`

      <div class="divider"></div>
      <div class="section">
        <h5>Section 1</h5>
        <p>Stuff</p>
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
      
     `;
  }

}
