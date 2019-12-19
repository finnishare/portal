import Component from '../component/component'

class Image extends Component {
    constructor(src,options) {
        super(options);
        this.src = src;
        console.log(this.options);
        console.log(this.rootDom)
    }

    render(container) {
        let img = document.createElement('img');
        img.src = this.src;
        return img;
    }
}

export default Image
