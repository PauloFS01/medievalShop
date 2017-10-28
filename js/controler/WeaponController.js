class WeaponController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._weaponView = new WeaponView($('#weaponView'));
        this._init();

    }

    _init(){
      this._weaponView.update()
    }
}
