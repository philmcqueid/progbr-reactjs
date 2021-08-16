class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saudacao() {
    console.log("Olá, meu nome é", this.name);
  }
}

module.exports = Person;
