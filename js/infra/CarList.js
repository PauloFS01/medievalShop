class CarList{
  constructor(){
    this._weapons = [];
    this._weaponList = new WeaponList();
    //alimentaCahche("4");
  };

  alimentaCahche(id){
    this._weapons.push(this._weaponList.getById(id));

  };

  get weapons(){
    return [].concat(this._weapons);
  }

}
