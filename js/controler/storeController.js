class StoreController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._homeView = new HomeView($('#itensView'));
        this._weaponList = new WeaponList();
        this._init();


    }

    _init(){
      console.log(this._weaponList);
      this._homeView.update(this._weaponList);
    }
}
