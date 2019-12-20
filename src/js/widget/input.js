import Component from '../component/component'

class Input extends Component {
    constructor(data, options) {
        super(options);
        this.data = data||{};
    }

    render(container) {
        let div = document.createElement('div');
        div.innerHTML = `<h1>${this.data.title}</h1><input value="${this.data.value}"/> <button>Submit</button>`;
        return div;
    }
}

export default Input
