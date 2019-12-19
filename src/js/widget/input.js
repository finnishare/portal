import Component from '../component/component'

class Input extends Component {
    constructor(options) {
        super(options);
        console.log(this.options);
        console.log(this.rootDom)
    }

    render(container) {
        let div = document.createElement('div');
        div.innerHTML = '<h1>Hello,Input</h1><input value="1"/>';
        return div;
    }
}

export default Input
