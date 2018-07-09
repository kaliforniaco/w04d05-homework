//CARS

/*const speed = 0;

module.exports.color = [red, blue, white];
module.exports.convertible= true | false;
module.exports.newspeed = () =>{
	newspeed = number + 
	console.log('Get number called the number is:', number);
	return number;
}
*/

// --

const car = module.exports = {

["color"="red",
"convertible"= true,
"speed"= 0],

accelerate(speedToAdd){
	let oldSpeed = this.speed;
	console.log(this.speed);
	this.speed += speedToAdd;
	console.log(`The speed went from ${oldSpeed} to ${this.speed}`)
},
decelerate(speedToSubtract){
	let oldSpeed = this.speed;
	this.speed -= speedToSubtract;
	console.log(`The speed went from ${oldSpeed} to ${this.speed}`);

}


car.accelerate(55);
car.decelerate(10);
car.decelereate(10);
module.exports = car;

