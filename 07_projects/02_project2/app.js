const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    const bmiSummary = document.querySelector('#bmi-summary')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please Enter Valid Height!";
    } else if (weight === "" || weight < 0 | isNaN(weight)) {
        results.innerHTML = "Please Enter Valid Weight!";
    } else {
        const bmi = ( weight / ((height*height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            bmiSummary.innerHTML = `You'r BMI is ${bmi} & it is Under-Weight`
        } else if ( 18.6 <= bmi < 24.9 ) {
            bmiSummary.innerHTML = `You'r BMI is ${bmi} & it is Normal Range`
        } else {
            bmiSummary.innerHTML = `You'r BMI is ${bmi} & it is Over-Weight`   
        }
    }
})