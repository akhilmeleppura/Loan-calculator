function calculateLoan() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var years = document.getElementById("years").value;
  
    var monthlyInterest = interest / 100 / 12;
    var totalPayments = years * 12;
    var x = Math.pow(1 + monthlyInterest, totalPayments);
    var monthlyPayment = (amount * x * monthlyInterest) / (x - 1);
    var totalPayment = monthlyPayment * totalPayments;
    var totalInterest = totalPayment - amount;
  
    var result = document.getElementById("result");
    result.innerHTML = `
      <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: $${totalPayment.toFixed(2)}</p>
      <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
  }
  