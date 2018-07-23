function Watch() {
    let startTime, stopTime, running, duration = 0;

    this.start = function () {
      if(running){
          throw Error('This hasnt started')
      }

    };

    this.stop = function () {
        console.log('stop')
    };

    this.reset = function () {
        console.log('reset')
    };
}

const sw = new Watch()
sw.start()