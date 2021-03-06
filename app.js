// Object Literal
let bio = {
    name: 'nick',
    job: 'web-developer',
    full: function() {
        console.log(this.name, this.job)
    }
}
bio.full()

const circle = {}

// Factory function
function rad (radius) {
    return {
        radius,
        draw: function() {
            console.log(radius * radius)
        }
    }
}
const callRad = rad(5)


// constructor function
function Bioo (radius) {
    this.radius = radius;
}

// ------- Enumerating properties
function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle1 = new Circle(10)

//with this you can check for keys and values in an object
for (let key in circle1) {
    if(typeof circle1[key] !== 'function' ){
    console.log(key, circle1[key]);
    }
}

// check for all keys in object
const keys = Object.keys(circle1)
console.log(keys)

// using the 'in' operator checking if a property or method exist in a functoon
if('radius' in circle1) {
    console.log('circle has a radius')
}

if('draw' in circle1 ){
    console.log('this object has a draw method')
} else {
    throw new Error ('no such thing in this object')
}

// ------- End of Enumerating properties

// --------- Abstraction (Hide the details and complexity and show only the esssentials)

function Circle2 (radius) {
    this.radius = radius;
    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = function() {
        return defaultLocation
    }

    this.draw = function () {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if(!value.x || !value.y){
                throw new Error('invalid location')
            }
            defaultLocation = value
        }
    });
}

const circle2 = new Circle2(15)
circle2.draw()

// --------- end of Abstraction

// ----------- Property Descriptors

let person = { name: 'nick' };
let objectbase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectbase, 'toString');
console.log(descriptor)

// ----------- endo of Property Descriptors

// ----------- Constructor Prototypes


// Mixins or compostions
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating')
    }
};

const canWalk = {
    walk: function(){
        this.hunger--;
        console.log('walking')
    }
};

const canSwim = {
    swim: function(){
        this.hunger--;
        console.log('Swiming')
    }
};

function Persnaa() {
    //... do some specifin logic here for persona
}

mixin(Persnaa.prototype, canEat, canWalk);
const persona = new Persnaa()
console.log(persona)

function Goldfish() {
    //... do some specifin logic here for goldfish
}

mixin(Goldfish.prototype, canEat, canSwim)
const goldfish = new Goldfish()
console.log(goldfish)
