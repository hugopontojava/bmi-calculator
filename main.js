let info = {
  kg: '0',
  height: '0',
  imcCalc: (kg, alt) => { 
    (kg / (alt*2))
  }
}

const weight = document.querySelector('.weight');
const height = document.querySelector('.height');


const btn = document.getElementById('calc-btn') 
btn.addEventListener('click', () => {
  const resultBox = document.querySelector('.result');
  const result = document.createTextNode(`Your BMI are:`)

  resultBox.appendChild(result)
})