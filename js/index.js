let section1W = document.querySelector('.section1');
let number1S = document.getElementById('number1-score');
let resultadoR = document.getElementById('resultado');
let estadoR = document.getElementById('estado');
let resultadoM = document.getElementById('resultado-ms2');
let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.querySelector('.button');

window.addEventListener('load', randomValues);

buttonContinue.addEventListener('click', randomValues);

function randomValues() {
  let values = [];
  for (let i = 1; i <= 4; i++) {
    randomNumbers = Math.round(Math.random() * 100);
    values.push(randomNumbers);
  }

  values.forEach((element, index) => {
    switch (index) {
      case 0:
        reaction.innerText = element + ' / 100';
        break;
      case 1:
        memory.innerText = element + ' / 100';
        break;
      case 2:
        verbal.innerText = element + ' / 100';
        break;
      case 3:
        visual.innerText = element + ' / 100';
        break;
      default:
        'Error';
    }
  });

  const media = values.reduce((valuePrevious, currentValue) => {
    return valuePrevious + currentValue;
  });

  let resultadoFinal = Math.round(media / 4);

  if (resultadoFinal >= 75) {
    section1W.classList.add('section1');
    number1S.classList.add('number1');
    section1W.classList.remove('section1-warning', 'section1-danger');
    number1S.classList.remove('number1-warning', 'number1-danger')
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Great';
    resultadoM.innerText = "You scored higher than 65% of the people who have taken these tests.";
  }

  if (resultadoFinal <= 74 && resultadoFinal > 43) {
    section1W.classList.add('section1-warning');
    number1S.classList.add('number1-warning');
    section1W.classList.remove('section1', 'section1-danger');
    number1S.classList.remove('number1', 'number1-danger');
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Warning';
    resultadoM.innerText = "You scored lower than 81% of the people who have taken these tests.";

  }

  if (resultadoFinal <= 43) {
    section1W.classList.add('section1-danger');
    number1S.classList.add('number1-danger');
    section1W.classList.remove('section1-warning', 'section1');
    number1S.classList.remove('number1', 'number1-warning');
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Danger';
    resultadoM.innerText = "You scored lower than 43% of the people who have taken these tests.";
  }

}