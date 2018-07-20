function Watch() {
    this.duration = 0;

    increment = function (duration) {
        return duration + 1
    }


    this.start = function () {
      console.log('clock started')
      increment(this.duration)
      console.log(this.duration)
      setInterval(function() {
        document.getElementById('number').innerHTML = this.duration
        console.log(this.duration)
      }.bind(this), 1000)
    };

    this.stop = function () {

    };

    this.reset = function () {
        console.log('reset')
    };
}

const sw = new Watch()
// sw.start()