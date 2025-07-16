class Animal {   // Parent class 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {   // Child class
  constructor(name, breed) {
    super(name); // Call parent constructor and pass `name`
    this.breed = breed;
  }

  speak() {
    super.speak(); // Call the parent `speak()` method
    console.log(`${this.name} barks. It is a ${this.breed}.`);
  }
}

const dog1 = new Dog('Tommy', 'Labrador');
dog1.speak();