let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function handleKeyboardInput(event) {
  const keyPressed = event.key;
  
  // Check if the key pressed is a number or an operator
  if (/^\d$|\+|\-|\*|\/|\./.test(keyPressed)) {
    appendToDisplay(keyPressed);
  } else if (keyPressed === '=' || 'Enter') {
    calculate();
  } else if (keyPressed === 'Escape') {
    clearDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

// Add event listener to the document to listen for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
