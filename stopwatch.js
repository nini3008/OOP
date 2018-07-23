function Watch() {
    let startTime, stopTime, running, duration = 0;

    this.interval = function () {
        setInterval(function() {
            document.getElementById('number').innerHTML = duration += 1
        }, 1000)
    }

    this.start = function () {
        if(running) {
            throw new Error('Stopwatch has already started')
        } else {
            running = true;
            this.interval()
        }

        startTime = new Date();
    };


    this.stop = function () {
        if(!running) {
            throw new Error('Stopwatch has already been stopped')
        } else {
            running = false;
            document.getElementById('number').innerHTML = 0
        }
        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        stopTime = null;
        running = 0;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

const sw = new Watch()
