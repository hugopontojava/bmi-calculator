const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const btn = document.getElementById("calc-btn");
const resultBox = document.querySelector(".result");
const p = document.createElement("p");
resultBox.append(p);

const clearValues = () => {
	weight.value = 0;
	height.value = 0;
}

const bmiCalc = () => {
	return parseFloat(weight.value / (height.value ** 2 * 0.0001)).toFixed(1)
}

const bmiType = () => {
	if (bmiCalc() < 18.5) { return 'Underweight' };
	if (bmiCalc() >= 18.5 && bmiCalc() <= 24.9 ) { return 'Normal' };
	if (bmiCalc() > 24.9 && bmiCalc() <= 29.9 ) { return 'Overweight' };
	if (bmiCalc() >= 30 && bmiCalc() <= 39.9 ) { return 'Obesity' };
	if (bmiCalc() > 39.9) { return 'Severe Obesity' };
}

const createRes = () => {
	return p.innerHTML = `Your BMI is : ${bmiCalc()}km/² <br> ${bmiType()}`;
}

btn.addEventListener('click', () => {
	if (height.value != 0 || weight.value != 0) {
		createRes();
		clearValues();
	} else {
		alert("Both values need to be diferent of 0!")
	}
})