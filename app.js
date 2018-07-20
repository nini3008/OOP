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
function Bio(radius) {
    return {
        radius,
        draw: function() {
            console.log(radius)
        }
    }
}

console.log(Bio(5).radius)


// constructor function
function Bioo (radius) {
    this.radius = radius
}

