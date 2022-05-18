import 'src/index.css';

console.log(require('./assest/town_tree/preview.png'), 123123123)

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello World';
  
    return element;
}
  
document.body.appendChild(component());