// Alert every 30 seconds
setInterval(function () {
  alert("Please, use me...");
}, 30000);

const calculate = (event) => {
  event.preventDefault(); // Prevent form submission

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
    console.log("Error :(");
    alert("Error :(");
    return;
  }

  let ans;

  switch (operator) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("It’s over 9000!");
        alert("It’s over 9000!");
        return;
      }
      ans = num1 / num2;
      break;
    case "%":
      if (num2 === 0) {
        console.log("It’s over 9000!");
        alert("It’s over 9000!");
        return;
      }
      ans = num1 % num2;
      break;
    default:
      console.log("Error :(");
      alert("Error :(");
      return;
  }

  console.log(ans);  // Logs the result to the console
  alert("Result: " + ans);  // Displays the result in an alert box
};

// Attach event listener to the form
document.getElementById("calcForm").addEventListener("submit", calculate);

