class Weapon{
  constructor(localImagem,nomeProdudo,preco){
    this._localImagem = localImagem;
    this._nomeProdudo= nomeProdudo;
    this._preco= preco;
  }
  get enderreco(){
    return this._localImagem;
  }
  get descricao(){
    return this._nomeProdudo;
  }
  get preco(){
    return this._preco;
  }
}
