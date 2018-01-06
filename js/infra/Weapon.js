class Weapon{
  constructor(localImagem,nomeProdudo,preco,id){
    this._localImagem = localImagem;
    this._nomeProdudo= nomeProdudo;
    this._preco= preco;
    this._id = id;
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
  get id(){
    return this._id;
  }
}
