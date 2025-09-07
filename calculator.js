let justCalculated = false;

function calculate() {
  try {
    input.value = eval(input.value);
    justCalculated = true;
  } catch {
    input.value = 'Error';
    justCalculated = false;
  }
}

document.querySelectorAll('.key-number').forEach(btn => {
  btn.addEventListener('click', function() {
    if (justCalculated) {
      input.value = '';
      justCalculated = false;
    }
    input.value += this.dataset.key;
  });
});

document.querySelectorAll('.key-operator').forEach(btn => {
  btn.addEventListener('click', function() {
    input.value += ` ${this.dataset.key} `;
    justCalculated = false;
  });
});

document.querySelector('.key-clear').addEventListener('click', function() {
  input.value = '';
  justCalculated = false;
});

document.querySelector('.key-equal').addEventListener('click', calculate);

// Listen once for Enter key globally and calculate
window.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    calculate();
  }
});

// Prevent Enter key default form/button behavior inside calculator keys container
document.querySelector('.calculator-keys').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
});