
function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focus')
}

function HtmlSelectElement(items = []) {
    this.items = items

    this.addItem = function(i) {
        this.items.push(i)
    }
    this.removeItem = function(i) {
        let index = this.items.indexOf(i);
        if (index > -i) {
            this.items.splice(index, i);
        }
    }

    this.render = function() {
        return `
            <select>
                ${this.items.map(item => `<option>${item}</option>`).join('')}
            </select>
        `;
    }

}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement()


function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlSelectElement;


// es6 classes > syntactic sugar

class Circs {
    constructor(rad){
        this.radius = rad
        this.move = function() {
            // this is adding a method in the object instance
        }
    }

    draw() {
        // ..this will end up in the protoype of Circs
    }
}
const cc = new Circs(5)