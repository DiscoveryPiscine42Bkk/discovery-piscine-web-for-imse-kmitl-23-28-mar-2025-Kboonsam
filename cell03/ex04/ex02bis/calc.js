$(document).ready(function () {
  // Auto alert every 30 seconds
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  // Form submission event
  $("#calcForm").submit(function (event) {
    event.preventDefault();

    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());
    let operator = $("#operator").val();
    let result;

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error: Please enter valid numbers.");
      console.log("Error: Invalid input.");
      return;
    }

    // Handle operations
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("It's over 9000!");
          console.log("It's over 9000!");
          return;
        }
        result = num1 / num2;
        break;
      case "%":
        if (num2 === 0) {
          alert("It's over 9000!");
          console.log("It's over 9000!");
          return;
        }
        result = num1 % num2;
        break;
      default:
        alert("Error: Invalid operator.");
        console.log("Error: Invalid operator.");
        return;
    }

    // Display result
    alert("Result: " + result);
    console.log("Result:", result);
  });
});

