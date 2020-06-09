//Factory Function
function createCircle(radius, ){
    return {
        radius, // if key:value are same
        draw(){ // draw method
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);