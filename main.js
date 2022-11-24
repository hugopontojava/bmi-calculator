const weight = document.querySelector(".weight")
const height = document.querySelector(".height")
const btn = document.getElementById("calc-btn")
const resultBox = document.querySelector(".result")
const p = document.createElement("p")

function clearValues() {
	weight.value = 0
	height.value = 0
}

function bmiCalc() {
	return parseFloat(weight.value / (height.value ** 2 * 0.0001)).toFixed(1)
}

function bmiType() {
	if (bmiCalc() < 18.5) {
		const typeRes = document.createTextNode("You is: Underweight")
		resultBox.appendChild(p)
		p.appendChild(typeRes)
	} else if (bmiCalc() >= 18.5 && bmiCalc() <= 24.9) {
		const typeRes = document.createTextNode("You is: Normal")
		resultBox.appendChild(p)
		p.appendChild(typeRes)
	} else if (bmiCalc() > 24.9 && bmiCalc() <= 29.9) {
		const typeRes = document.createTextNode("You is: Overweight")
		resultBox.appendChild(p)
		p.appendChild(typeRes)
	} else if (bmiCalc() >= 30.0 && bmiCalc() <= 39.9) {
		const typeRes = document.createTextNode("You is: Obesity")
		resultBox.appendChild(p)
		p.appendChild(typeRes)
	} else if (bmiCalc() > 39.9) {
		const typeRes = document.createTextNode("You is: Severe Obesity")
		resultBox.appendChild(p)
		p.appendChild(typeRes)
	}
}

function createRes() {
	const res = document.createTextNode(`Your BMI is: ${bmiCalc()}kg/m²`)
	resultBox.appendChild(res)
}

// TODO: understand why just the bmiType is erased.
function eraseRes() {
	if (resultBox.childNodes.length > 2) {
		resultBox.remove()
	}
}

btn.addEventListener("click", () => {
	if (height.value != 0 || weight.value != 0) {
		createRes()
		bmiType()
		eraseRes()
		clearValues()
	} else {
		alert("Both values need to be diferent of 0!")
	}
})