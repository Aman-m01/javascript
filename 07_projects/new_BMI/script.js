function calculateBMI() {
    const height = parseFloat((document.querySelector('#height').value))
    const weight = parseFloat((document.querySelector('#weight').value))

    if (isNaN(height) || isNaN(weight) || (height <= 0) || (weight <= 0)) {
        document.querySelector('#result').innerHTML = "please enter a valid height and weight";
        return;
    }
    const BMI = weight / ((height / 100) * (height / 100));

    document.querySelector('#result').innerHTML = 'your BMI is: ' + BMI.toFixed(2);
}

