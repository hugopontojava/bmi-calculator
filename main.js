const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

function clearResult() {
  weight.value = 0;
  height.value = 0
}

const btn = document.getElementById('calc-btn') ;
btn.addEventListener('click', () => {
  function imcCalc () {
    return parseFloat((weight.value / ((height.value ** 2) * 0.0001))).toFixed(1);
  }

  if (height.value == 0 && weight.value == 0) {
    alert('Both values need to be diferent of 0!');
  } else {
      const resultBox = document.querySelector('.result');
      const result = document.createTextNode(`Your BMI is: ${imcCalc()}kg/m²`);
      const p = document.createElement('p');
      
      resultBox.appendChild(result);

      if ( imcCalc() < 18.5 ) {
        clearResult();

        const classResult = document.createTextNode('It is: Underweight');
        resultBox.appendChild(p);
        p.appendChild(classResult);
      } else if ( imcCalc() >= 18.5 && imcCalc() <= 24.9 ) {
        clearResult();

          const classResult = document.createTextNode('It is: Normal');
          resultBox.appendChild(p);
          p.appendChild(classResult);
      } else if ( imcCalc() > 24.9 && imcCalc() <= 29.9 ) {
        clearResult();

          const classResult = document.createTextNode('It is: Overweight');
          resultBox.appendChild(p);
          p.appendChild(classResult);
      } else if ( imcCalc() >= 30.0 && imcCalc() <= 39.9 ) {
        clearResult();

          const classResult = document.createTextNode('It is: Obesity');
          resultBox.appendChild(p);
          p.appendChild(classResult);
      } else if ( imcCalc() > 39.9 ) {
        clearResult();

          const classResult = document.createTextNode('It is: Severe Obesity');
          resultBox.appendChild(p);
          p.appendChild(classResult);
      } 
    }
})