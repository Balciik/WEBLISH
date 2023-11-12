const steps = document.querySelectorAll('.step');
const nextButton = document.getElementById('nextButton');
const resetButton = document.getElementById('previousButton');

let currentStep = 1;

nextButton.addEventListener('click', () => {
    if (currentStep <= 3) {
        steps[currentStep - 1].classList.add('active');
        currentStep++;
    }

    if (currentStep > 3) {
        nextButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        steps[currentStep - 1].classList.remove('active');
        nextButton.disabled = false;
    }
});