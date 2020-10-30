// import using require

// declare class


// export class using module.exports
let  Shape=require('./shape');
module.exports=class Circle extends Shape
{
constructor()
{
super()
}
 calculateArea()
 {
console.log("Area of circle with color: "+this.color);
 return 3.14*5*5;
 }
}
