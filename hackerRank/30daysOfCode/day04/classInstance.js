function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    var age = initialAge;
    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (age < 13 && age > -1)
            console.log("You are young.");
        else if (age < 18 && age > 12)
            console.log("You are a teenager.");
        else if (age > 17)
            console.log("You are old.");
        else {
            console.log("Age is not valid, setting age to 0.")
            age = 0;
            this.amIOld();
        }
    };
    this.yearPasses = function () {
        // Increment the age of the person in here
        age++;
    };
}


/*
function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    var age;
    if (initialAge >= 0) {
        age = initialAge
    } else {
        age = 0;
        console.log('Age is not valid, setting age to 0.');
    }
    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (age < 13) {
            console.log('You are young.');
        } else if (age >= 13 && age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old.');
        }
    };
    this.yearPasses = function () {
        // Increment the age of the person in here
        age += 1;
    };
}
*/


/*
function Person(initialAge){
    // Add some more code to run some checks on initialAge
    this.age = this.age || undefined;
    if (initialAge < 0) {
        console.log("Age is not valid, setting age to 0.");
        this.age = 0;
    } else {
        this.age = this.age || initialAge;
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if (this.age < 13) {
          console.log("You are young.");
          return;
      }
      if (this.age >= 13 && this.age < 18) {
          console.log("You are a teenager.");
          return;
      }
      console.log("You are old.");
      return;
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       this.age += 1;
   };
}
*/