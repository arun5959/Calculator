let justCalculated = false; // Flag to track if last action was calculation

document.querySelectorAll('.key-number').forEach(btn => {
  btn.addEventListener('click', function() {
    if (justCalculated) {
      input.value = '';     // Clear input before new number entry
      justCalculated = false;
    }
    input.value += this.dataset.key;
  });
});

document.querySelectorAll('.key-operator').forEach(btn => {
  btn.addEventListener('click', function() {
    input.value += this.dataset.key;
    justCalculated = false;  // Operators don't clear input on next number
  });
});

document.querySelector('.key-clear').addEventListener('click', function() {
  input.value = "";
  justCalculated = false;
});

function calculateResult() {
  try {
    const result = eval(input.value);  // Evaluate expression
    input.value = result;               // Show result in input
    justCalculated = true;              // Mark that calculation just happened
  } catch {
    input.value = 'Error';
    justCalculated = false;
  }
}

document.querySelector('.key-equal').addEventListener('click', calculateResult);