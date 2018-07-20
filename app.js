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

