
//'this' means the current object that it is in. 




//objects -- array with a object

/*
var users = [
    {
        name: 'John Doe',
        age: 30
    },    
    {
        name: 'Doe John',
        age: 22
    },
    {
        name: 'Brandon Doe',
        age: 40
    }

];

console.log(users[0].name);
*/




/*
var person = {
    firstName: 'Brandon',
    lastName: 'Lent',
    age: 23,
    address: {
        street:'555 something',
        city: 'Boston',
        state: 'MA'
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.fullName());
*/

//Constructor Pattern assigning a variable something
/*
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.describe;
    }

}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'round');

console.log(apple.describe());
*/
