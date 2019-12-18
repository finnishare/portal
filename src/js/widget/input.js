import Component from '../component/component'
class Input extends Component{
    constructor(options){
        super(options);
     console.log(options)
    }
    render(container,ref){
        let div = document.createElement('div');
        div.innerHTML = '<h1>Hello,Input</h1><input value="1"/>';
       return div;
    }
}
export default Input
