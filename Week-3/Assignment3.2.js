// Bind() =  Borrows a function and creates a copy.
//          "this" Keyword is replaced with the object 
//           passed in as an argument.
//           It will create a whole new function 



let dog = {
  name:"dog",
  bark:function(){
    console.log(`${this.name} is barking`);
  }
}

let human = {
  name:"human",
  speak:function(){
    console.log(`${this.name} is speaking`);
  }
}

//both are objects are immutable and cannot be changed 
// but if you want to borrow the function lets say the human objct wants to mimic the bark
// this can be done by bind

let sound1 = dog.bark.bind(human);    //the dog.bark is the function and the human object is passed so here 
sound1();                             //this now refers to the object that we passed in that is human


//same way now the dog want to mimic and speak like a human 

let sound2 = human.speak.bind(dog);  
sound2();

// -----------------------------------

// here we have aa stand alone function 

speak = function(noise){
  console.log(`${this.name} is ${noise}ing`);
}

let cat = {
  name:"cat"
}

let cow = {
  name:"cow"
}

const meow = speak.bind(cat,"meow");             //borrowing a function and creating a copy
meow();

const mooo = speak.bind(cow,"mooo");              //borrowing a function and creating a copy
mooo();


// ------------------------------------------------------------------------------------------------------------------------------

// call


let employee ={
  name:"spongebob",
  cook:function(){
    console.log(`${this.name} is cooking`)
  }
}

let manager ={
  name:"mr.krabs",
  managing:function(){
    console.log(`${this.name} is managing`)
  }
}

let engineer ={
  name:"patrick star",
  engineering:function(){
    console.log(`${this.name} is engineering`)
  }
}


// employee.cook();
// manager.managing();
// engineer.engineering();



//here lets say sponge bob is on leave and the manager has to take incharge of the cooking 
// but he has no access to the cook function but he can borrow the cook function from the 
// employee object by using the call method 
employee.cook.call(manager);

// Now that manager is cooking someone has to manage and the manager role falls to the engineer
// but he has no access to the managing function but he can borrow the managing function from the 
// manager object by using the call method
manager.managing.call(engineer);


// --------------------------------------------------------------------------------------------------------------

//apply() = Borrow an object's function.
//          similar to call(), but pass an array

var team = {
  UI:function(members){
    console.log(this.name);
    for(let i in members){
      console.log(members[i]);
    }
  }
}

var leader = {name:"steve"}
var members = [{name:"jack"},{name:"mark"}];


team.UI.apply(leader,[members]);