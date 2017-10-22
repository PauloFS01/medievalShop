class View {
  constructor(elemento) {
    this._elemento = elemento;
  }
  template(model){
    throw new Error('Esse método de ser sobreescrito!!')
  }

  update(model){
    this._elemento.innerHTML = this.template(model);
  }

}
