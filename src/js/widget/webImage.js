import Component from '../component/component'
import Input from "./input";
import Image from "./image";

class WebImage extends Component {
    constructor(data,options) {
        super(options);
        this.data = data;
    }

    render(container) {
        const input = new Input(this.data);
        const image = new Image(this.data.value);
        this.rootDom.appendChild(input.render());
        this.rootDom.appendChild(image.render());
        return this.rootDom;
    }
}

export default WebImage
