function calculate(operation) {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var result = "";

  if (isNaN(a) || isNaN(b)) {
    result = "⚠️ Please enter valid numbers.";
  } else {
    switch(operation) {
      case 'add':
        result = a + b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'multiply':
        result = a * b;
        break;
      case 'divide':
        result = (b !== 0) ? (a / b) : "❌ Error: Division by zero";
        break;
       //More functions to add//
    }
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}

function clearResult() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerHTML = "";
}

