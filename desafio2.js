/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  */

let listStudent = [
  {
    name: 'Jordan',
    firstProof: 10,
    secondProof: 6
  },
  {
    name: 'Damaris',
    firstProof: 7,
    secondProof: 7
  },
  {
    name: 'Jonatas',
    firstProof: 10,
    secondProof: 8
  }
]

function average(note1, note2) {
  return (note1 + note2) / 2
}

function checkApproval(student) {
  const minimumAverage = 7

  for (let i = 0; i < student.length; i++) {
    const pupil = student[i]
    const averag = average(pupil.firstProof, pupil.secondProof)
    if (averag >= minimumAverage) {
      alert(`${pupil.name} foi aprovado no concurso!`)
    } else {
      alert(`${pupil.name} não foi aprovado no concurso.`)
    }
  }
}
checkApproval(listStudent)
