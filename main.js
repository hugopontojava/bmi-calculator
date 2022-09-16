const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

const btn = document.getElementById('calc-btn') ;
btn.addEventListener('click', () => {
  function imcCalc () {
    return parseFloat((weight.value / ((height.value ** 2) * 0.0001))).toFixed(2);
  }

  if (height.value == 0 && weight.value == 0) {
    alert('Both values need to be diferent of 0!');
  } else {
    console.log(imcCalc()); 
      const resultBox = document.querySelector('.result');
      const result = document.createTextNode(`Your BMI is: ${imcCalc()}kg/m²`);
      resultBox.appendChild(result);
  }
})