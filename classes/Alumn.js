const Person = require("./Person");

class Alumn extends Person {
  constructor(name, age, turma) {
    super(name, age);
    this.turma = turma;
  }

  saudacao() {
    console.log("Olá meu nome é", this.name, "sou da turma", this.turma);
  }
}

module.exports = Alumn;
