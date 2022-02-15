// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};
video.stop = function(){ // stop is method in video object
    console.log(this);
};
video.play();
video.stop();


function playVideo() {
    console.log(this);
}
playVideo(); // get window object


// constructor function
// const v = new Video('a'); // new empty object {}

const video2 = { 
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){ //forEach has 2 parameters: 
            console.log(this, tag);
        }, this); //references current object, execution context of showTags method
    }
};
video2.showTags();


