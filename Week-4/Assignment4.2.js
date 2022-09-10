const Person = function (name,subject){                    //whenever the new keyword is used on the function                       
  this.name = name;                                        //it chnages from normal function to a constructor function 
  this.subject = subject;
};


//teach methord is added to the Person class
Person.prototype.teach = function(){
  console.log(`${this.name.toUpperCase()} is now teaching ${this.subject.toUpperCase()}`);
}

var Teacher = new Person("akash","Inheritance");            //object Teacher is created derived from Person class

console.log(Teacher.teach());                               //here the teach methord is called on Teacher even if the object 
                                                            //teacher doesnt have the methord teach it is inherited from the parent