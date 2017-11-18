class WeaponList{
  constructor(){
    this._weapons = [];
    this._alimentaArray();
  }

  _alimentaArray(){
    let amuleto = new Weapon('images/produtos/amuleto.jpg','Amuleto Viking','20.00');
    this._weapons.push(amuleto);

    this._weapons.push(new Weapon('images/produtos/barco.jpg','Replica de barco Viking','210.00'));
    this._weapons.push(new Weapon('images/produtos/caneca.jpg','Caneca de chifre','40.00'));
    this._weapons.push(new Weapon('images/produtos/chifre.jpg','Chifre Ornamental','32.00'));
    this._weapons.push(new Weapon('images/produtos/coroa.jpg','Coroa medieval','100.00'));
    this._weapons.push(new Weapon('images/produtos/coroaElfica.jpg','Coroa Elfica','213.00'));
    this._weapons.push(new Weapon('images/produtos/cotaDemalha.jpg','Cota De malha calvaleiro medieval','80.00'));
    this._weapons.push(new Weapon('images/produtos/elmoEspartano.jpg','Elmo Espartano','300.00'));
    this._weapons.push(new Weapon('images/produtos/pulseira.jpg','Pulseira Viking','23.00'));

  }

  get weapons(){
    return [].concat(this._weapons);
  }

}
