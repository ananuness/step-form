const stepperLine = document.querySelector('.stepper__line');
const steps = document.querySelectorAll('.stepper__step');

export const updateStep = (currentActiveStep) => {
  steps.forEach((step, index) => {
    index < currentActiveStep 
    ? step.classList.add('active') 
    : step.classList.remove('active');

    const activeSteps = document.querySelectorAll('.stepper__step.active');

    stepperLine.style.width = `
      ${((activeSteps.length - 1) / (steps.length - 1)) * 100}%
    `
  });
}