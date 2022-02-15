// what if callback function doesn't provide 2nd context parameter?

// define self, referencing to this object
const video = { 
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag){ //forEach has 2 parameters: 
            console.log(self.title, tag);
        }, this); //references current object, execution context of showTags method
    }
};
video.showTags();


// this function is technically an object
function playVideo(){
    console.log(this);
}

// 
playVideo.call({name: 'Mosh'}, 1, 2) // shows object
playVideo.apply({name: 'Mosh'}, [1,2]) // shows object, pass parameter as array
playVideo.bind({name: 'Mosh'})(); // points to object passed
playVideo(); //references window object


// by default this references global object
// define self, referencing to this object
const video2 = { 
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){ //forEach has 2 parameters: 
            console.log(this.title, tag);
        }.bind(this)); //references current object, execution context of showTags method
    }
};
video2.showTags();


// change function to arrow funciton
const video3 = { 
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }); //references current object, execution context of showTags method
    }
};
video3.showTags();