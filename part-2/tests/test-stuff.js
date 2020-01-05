const chai = require('chai');
const expect = chai.expect;
const StringChanger = require('../classes/string-changer.js');

describe('AlphaCharacterChange', function() {
  it('Should increment alphabet characters by 2', function() {
    var stringChanger = new StringChanger([]);
    var input = "£7eBm";
    var result = "£7gdo";
    expect(stringChanger.nextLetter(input)).to.equal(result);
  });

  it('Should capitalize vowels', function() {
      
  })
});
