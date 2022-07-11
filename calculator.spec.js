describe("Calculator.js", function () {
  it("should add number to the total", function () {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  it("should subtract number to the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.substract(4);
    expect(calculator.total).toBe(6);
  });

  it("should multiply number to the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(4);
    expect(calculator.total).toBe(40);
  });

  it("should divide number to the total", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.divide(4);
    expect(calculator.total).toBe(2.5);
  });
});
