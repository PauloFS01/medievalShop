class WeaponList{

  constructor(){
    this._weapons = [];
    this._alimentaArray();
  }

  _alimentaArray(){

    this._weapons.push(new Weapon('images/produtos/barco.jpg','Barco Viking','210.00','1'));
    this._weapons.push(new Weapon('images/produtos/caneca.jpg','Caneca de chifre','40.00','2'));
    this._weapons.push(new Weapon('images/produtos/chifre.jpg','Chifre Ornamental','32.00','3'));
    this._weapons.push(new Weapon('images/produtos/coroa.jpg','Coroa medieval','100.00','4'));
    this._weapons.push(new Weapon('images/produtos/coroaElfica.jpg','Coroa Elfica','213.00','5'));
    this._weapons.push(new Weapon('images/produtos/cotaDemalha.jpg','Cota De malha','80.00','6'));
    this._weapons.push(new Weapon('images/produtos/elmoEspartano.jpg','Elmo Espartano','300.00','7'));
    this._weapons.push(new Weapon('images/produtos/pulseira.jpg','Pulseira Viking','23.00','8'));
    this._weapons.push(new Weapon('images/produtos/amuleto.jpg','Amuleto Viking','20.00','9'));

  }

  get weapons(){
    return [].concat(this._weapons);
  }

  getById(id){
    var seachWeapon;
    for (var i = 0; i < this._weapons.length; i++){
      if(this._weapons[i].id === id){
        seachWeapon = this._weapons[i];

      }
    }
    console.log("Na list: " + id);
    return seachWeapon;
  }

}
