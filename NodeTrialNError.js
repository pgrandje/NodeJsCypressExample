console.log("Console Log output - Added two ints 5 + 6: ");
console.log(5 + 6);

var array1_cars = ["Saab", "Volvo", "BMW"];

var array2_cars = new Array("Ford", "Chevy", "Mazda");


var first = array2_cars[0];

console.log("Array2 First Elem: " + array2_cars[0]);

console.log("Array1 Length: " + array1_cars.length);

array1_cars.pop();

// NOTE: 'debugger' keyword works if a debugger is turned on.
debugger;

for (i=0; i<array1_cars.length; i++) {
	console.log("Item '" + i + " is both[$i] " + array1_cars[i]);
}


for (car in array2_cars) {
	console.log("Array2 Car: " + array2_cars[car]);
}

array2_cars.forEach(element => {
  console.log("Using for-each: " + element);
});


var person = {
	firstName: "Joe", 
	lastName: "Blo",
	fullName: function () {return this.firstName + " " + this.lastName;}
};

console.log("Person: " + person.fullName());



