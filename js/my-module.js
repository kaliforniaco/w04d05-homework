const number=7;

module.exports.name = 'kenahia';
module.exports.someArr = [1,2,3];
module.exports.getNumber = () =>{
	console.log('Get number called the number is:', number);
	return number;
}

console.log('end of my module.js file');
