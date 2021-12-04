window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 
 let values = {amount: 10000, years: 2, rate: 5};
 let loanAmount = document.getElementById("loan-amount").value;
 let loanYears = document.getElementById("loan-years").value;
 let yearlyRate = document.getElementById("loan-rate").value;

 loanAmount = values.amount;
 loanYears  = values.years;
 yearlyRate = values.rate;
 
 update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
let principal = values.amount;
let periodicRate = ((values.rate)/100)/12;
let totalYears = values.years;
let numberofPayments = totalYears*12;

let monthlyPayment = (principal*periodicRate)/(1-(Math.pow((1+periodicRate),-numberofPayments)));
let roundedPayment = monthlyPayment.toFixed(2);

return roundedPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
let monthlyPaymentContainer = document.getElementById("monthly-payment");
monthlyPaymentContainer.innerHTML = "$" +(monthly);
return monthlyPaymentContainer.innerHTML;
}
