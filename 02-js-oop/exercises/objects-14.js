// Implement a stopwatch
// sw.start()
// sw.stop()
// sw.duration
// sw.reset()
// ...

// Constructor Function first letter uppercase
function StopWatch(){
    let isTicking = false;
    let duration = 0;
    let startTime, stopTime;
    
    this.start = function(){
        if (isTicking)
            throw new Error('Already started. Cannot start twice!');
        isTicking = true;
        startTime = new Date();

        // console.log('Started at ' + startTime);
    }
    this.stop = function(){
        if (!isTicking)
            throw new Error('Already stopped. Cannot stop twice!');
        isTicking = false;
        stopTime = new Date();
        duration = duration + (stopTime.getTime() - startTime.getTime())/1000;
        // console.log('Stopped at' + startTime);
        // console.log('Duration is ' + duration);

    }
    this.reset = function(){
        duration = 0;
    }

    // define getter, no setter
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });

}

const sw = new StopWatch();
sw.duration;
sw.start();
sw.stop();
sw.duration;