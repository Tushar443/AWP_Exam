class human{
   private firstName: string;
   private lastName : string;
   private eyeColor : string;
   private hairColor : string;
   private age:number;

    constructor(firstName:string,lastName:string,hairColor:string='black',eyeColor:string='green',age:number=NaN){
        this.firstName=firstName;
        this.lastName=lastName;
        this.eyeColor=eyeColor;
        this.hairColor=hairColor;
        this.age=age;
    }
    doAction(){
    }
    getName(){
        return this.firstName+ ' ' + this.lastName;
    }
}

//let obj1 =new human('Tushar','More'); //error if we pass 2 parameters

// adding 5 parameters then no error

let obj1 =new human('Tushar','More','blacke','brown',25); 

// obj1.firstName ='Prakash';
// but we need last three parametersshould be optional so we add ? in constructor
 let obj2 =new human('Tushar','More');
console.log(obj1);
console.log(obj2);


