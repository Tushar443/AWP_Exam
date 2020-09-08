class Person{
    static my_Variable ='Thunder Strom';
    constructor(private firstName:string,private lastName:string,private hairColor?:string,private eyeColor?:string,private age?:number){}

    getName(){
        return this.firstName + ' '+ this.lastName;
    }
}

let person1 = new Person('Tushar','More','Black','Brown',25);
let person2 = new Person('Tushar','More');
console.log(person1);
console.log(person2);
console.log(Person.my_Variable);
