let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}
function operate(operator) {
    if (displayValue !== 'Error') {
      displayValue += operator;
      updateDisplay();
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var display = document.querySelector('form input[name="display"]');
  
    var buttons = document.querySelectorAll('.calculator form input[type="button"]');
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var buttonText = this.value;
  
        switch (buttonText) {
          case "=":
            try {
              display.value = eval(display.value);
            } catch (error) {
              display.value = "Error";
            }
            break;
          case "AC":
            display.value = "";
            break;
          case "DE":
            display.value = display.value.slice(0, -1);
            break;
          default:
            display.value += buttonText;
            break;
        }
      });
    });
  });
  