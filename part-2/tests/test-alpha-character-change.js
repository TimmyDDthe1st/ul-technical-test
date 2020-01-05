const chai = require('chai');
const expect = chai.expect;
const StringChanger = require('../classes/string-changer.js');

describe('AlphaCharacterChange', function() {
  it('Should increment alphabet characters by 2', function() {
    var stringChanger = new StringChanger([]);
    var input = "£7eBm";
    var result = "£7gDo";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  });

  it('Should make z into b', function() {
    var stringChanger = new StringChanger([]);
    var input = "z";
    var result = "b";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  })

  it('Should make Z into B', function() {
    var stringChanger = new StringChanger([]);
    var input = "Z";
    var result = "B";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  })

  it('Should make y into a', function() {
    var stringChanger = new StringChanger([]);
    var input = "y";
    var result = "a";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  })

  it('Should make Y into A', function() {
    var stringChanger = new StringChanger([]);
    var input = "Y";
    var result = "A";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  })

  it('Should capitalize vowels', function() {
    var stringChanger = new StringChanger([]);
    var input = "aeiou";
    var result = "AEIOU";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  })
});
