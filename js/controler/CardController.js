class CardController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._cardView = new CardView($('#itensView'));
        this._url = window.location.toString().split("?")[1];
        this._carList = new CarList();
        this._init();

    }

    _init(){
      this._carList.alimentaCahche(this._url);
      this._cardView.update(this._carList);
    }
}
