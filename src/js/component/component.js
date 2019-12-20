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

    unmount() {
        console.log('widget unmount');
    }

    willMount(container) {
        console.log('widget willMount')
    }

    mounted(container) {
        console.log('widget mounted');
    }

    render(container) {
     return this.rootDom;
    }
}

export default Component
