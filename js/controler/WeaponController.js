class WeaponController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._weaponView = new WeaponView($('#weaponView'));
        this._weaponList = new WeaponList();
        this._init();

    }

    _init(){
      this._weaponView.update(this._weaponList);
    }
}
