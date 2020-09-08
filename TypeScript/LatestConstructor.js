var Person = /** @class */ (function () {
    function Person(firstName, lastName, hairColor, eyeColor, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Person.my_Variable = 'Thunder Strom';
    return Person;
}());
var person1 = new Person('Tushar', 'More', 'Black', 'Brown', 25);
var person2 = new Person('Tushar', 'More');
console.log(person1);
console.log(person2);
console.log(Person.my_Variable);
