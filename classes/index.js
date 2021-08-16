let turma = [10, 9, 8, 7, 10, 8, 9, 10, 10];

let somaTodasNotas = turma.reduce((acc, current) => {
  return (acc += current);
}, 0);

let mediaGeralTurma = somaTodasNotas / turma.length;

console.log(mediaGeralTurma.toFixed(2));

if (mediaGeralTurma >= 8) {
  console.log("A turma foi uma das melhores");
} else {
  console.log("Não foi uma das melhores");
}
