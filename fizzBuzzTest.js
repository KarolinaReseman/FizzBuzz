const expect = require("chai").expect;
const fizzBuzz = require("../fizzBuzz.js");

describe("FizzBuzz >", () => {
  it("OK, FizzBuzz returns 1", () => {
    expect(fizzBuzz(1)).to.equal(1);
  });
  it("OK, FizzBuzz returns 2", () => {
    expect(fizzBuzz(2)).to.equal(2);
  });
  it('OK, returns "Fizz" for 3', () => {
    expect(fizzBuzz(3)).to.equal("Fizz");
  });
  it('OK, returns "Fizz" for multiples of 6', () => {
    expect(fizzBuzz(6)).to.equal("Fizz");
  });
  it('OK, returns "Buzz" for 5', () => {
    expect(fizzBuzz(5)).to.equal("Buzz");
  });
  it('OK, returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(10)).to.equal("Buzz");
  });
  it('OK, returns "FizzBuzz" for multiples of 3 & 5', () => {
    expect(fizzBuzz(15)).to.equal("FizzBuzz");
  });
});