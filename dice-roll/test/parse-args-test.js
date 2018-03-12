
const { assert: { isObject, hasAllKeys } } = require('chai');
const parse = require('../lib/parse-args');

describe("parse module", () => {

  describe("dieNums", () => {
    it("should be an object", () => {
      isObject(parse([1, 2]));
    });
    it("object has all keys", () => {
       const obj = parse([1, 2]);
      hasAllKeys(obj, ['count', 'sides']);
    })
  });

});