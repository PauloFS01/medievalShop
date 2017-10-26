class View {
  constructor(elemento) {
    this._elemento = elemento;
  }
  template(){
    throw new Error('Esse método de ser sobreescrito!!')
  }

  update(){
    this._elemento.innerHTML = this.template();
    console.log("testando update da wiew");
  }

}
