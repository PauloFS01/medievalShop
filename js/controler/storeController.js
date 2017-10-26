//implementar controller
class StoreController {

    constructor() {

        let $ = document.querySelector.bind(document);
        //this._itensView= $('#itensView');
        this._homeView = new HomeView($('#itensView'));
        this._init();

    }

    _init(){
      this._homeView.update()
    }
}
