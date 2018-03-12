const { assert: {isFunction, isNumber, isNotNaN, oneOf, isString, match} } = require('chai');
const { roll, toDiceNotation } = require('../lib/dice');

describe("dice module", () => {

  describe('roll()', () => {
    it("should be a function", () => {
      isFunction(roll);
    });
    it("should return a number", () => {
      isNumber(roll("2d30"));
      isNotNaN(roll("2d25"));
    });
    it("should accept a string and return a computed number", () => {
      for(let i = 1; i < 10; i++) {
        let diceNotation = `${i}d6`;
        oneOf(roll(diceNotation), Array.from(Array(61).keys()));
      };
    });
  });

  describe('toDiceNotation()', () => {
    it("should be a function", () => {
      isFunction(toDiceNotation);
    });
    it("should return a string", () => {
      isString(toDiceNotation(1, 5));
    });
    // it("should split args with 'd'", () => {
    //   include((toDiceNotation()));
    //   // match(toDiceNotation());

    // })
  });
});