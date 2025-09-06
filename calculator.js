document.querySelectorAll('.key-number').forEach(btn => {
  btn.addEventListener('click', function() {
    input.value += this.dataset.key;
  });
});

document.querySelectorAll('.key-operator').forEach(btn => {
    btn.addEventListener('click', function(){
        input.value += this.dataset.key;
    });
});

document.querySelector('.key-clear').addEventListener('click', function(){
    input.value = "";
});

function calculateResult() {
  try {
    const result = eval(input.value);  // Evaluate expression
    input.value = result;               // Show result in input
  } catch {
    input.value = 'Error';              // Handle invalid input gracefully
  }
}

document.querySelector('.key-equal').addEventListener('click', calculateResult);