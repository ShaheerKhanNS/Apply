
let car = {
    model:"Ford"
}

let homeLand = function(a){
    return `${this.model} is an ${a}n company`
}

let result= homeLand.call(car,"America");
console.log(result);


let businessLocation = function(a,b){
    return `${this.model} has business in ${a} and also in ${b}`
}

let locations = businessLocation.apply(car,["UK","Australia"]);


console.log(locations);

let multiply = function (x,y){
    return x*y;
}

let multiplyTwo = multiply.bind(this,2);

console.log(multiplyTwo(3));

let student = {
    name:"John",
    age:24,
   
}

let printAge = function(){
    return this.age;
}

let print = printAge.bind(student)
console.log(print());