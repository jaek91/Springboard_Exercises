
describe('monthly payments tests', function() {
  
  it("should calculate the monthly rate correctly", function () {
  
    values = {amount: 20000, years: 3, rate: 5};
    expect(calculateMonthlyPayment(values)).toEqual('599.42');
  });
  
  it("should return a result with 2 decimal places", function() {
    
    values = {amount: 50000, years: 3, rate: 5};
    expect(calculateMonthlyPayment(values)).toEqual('1498.54');
  });
})

 describe('input display tests', function() {

  it("should give NaN for string inputs", function(){
    
    values2 = {amount: "asdfwe", years:"dfs", rate: "asdf"};
    expect(calculateMonthlyPayment(values2)).toEqual(NaN.toString());
  })

  it("should display a negative monthly payment if the loan amount is negative", function() 
  { 
    value = {amount: -100000, years: 3, rate: 5};
    expect(calculateMonthlyPayment(value)).toBeLessThan(0);
  })


})


