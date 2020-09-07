var human = /** @class */ (function () {
    function human(firstName, lastName, hairColor, eyeColor, age) {
        if (hairColor === void 0) { hairColor = 'black'; }
        if (eyeColor === void 0) { eyeColor = 'green'; }
        if (age === void 0) { age = NaN; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
    human.prototype.doAction = function () {
    };
    human.prototype.getName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return human;
}());
//let obj1 =new human('Tushar','More'); //error if we pass 2 parameters
// adding 5 parameters then no error
var obj1 = new human('Tushar', 'More', 'blacke', 'brown', 25);
// but we need last three parametersshould be optional so we add ? in constructor
var obj2 = new human('Tushar', 'More');
console.log(obj1);
console.log(obj2);
