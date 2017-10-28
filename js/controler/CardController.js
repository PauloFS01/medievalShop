class CardController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._cardView = new CardView($('#itensView'));
        this._init();

    }

    _init(){
      this._cardView.update()
    }
}
