export default function bootstrap(el, options) {
    let portal = new Portal(el, options);
    portal.init();
    return portal;
}

class Portal {
    constructor(el, options) {
        this.el = document.querySelector(el);
        this.options = options;
    }

    init() {
        console.log(this.options);
        this.options.widget.forEach(function(widget){
          this.register(widget);
        }.bind(this))
    }
    register(widget){
       this.el.appendChild(widget.render());
    }
}

