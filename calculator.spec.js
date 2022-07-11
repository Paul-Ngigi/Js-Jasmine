describe("Calculator.js", function () {
  xit("should add number to the total", function () {
    // This test is temporarily disabled 
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  it("should subtract number from the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.substract(4);
    expect(calculator.total).toBe(6);
  });

  it("should multiply number with the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(4);
    expect(calculator.total).toBe(40);
  });

  it("should divide number by the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.divide(4);
    expect(calculator.total).toBe(2.5);
  });

  it("should initialize the total", function() {
    const calculator = new Calculator();
    expect(calculator.total).toBe(0);
  })
});
