import Util from '../util/util'

class Component {
    constructor(options) {
        const uuid = Util.uuid();
        let defaultOptions = {
            id: uuid
        };
        this.options = Util.extend(defaultOptions, options);
        this.parent = null;
        this.rootDom = document.createElement(`div`);
        this.rootDom.id=`widget_${this.options.id}`;
    }

    unmount(container) {
    }

    willMount(container) {
    }

    mounted(container) {
    }

    render(container) {

    }
}

export default Component
