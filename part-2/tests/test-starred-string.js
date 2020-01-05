const chai = require('chai');
const expect = chai.expect;
const StarFinder = require('../classes/star-finder.js');

describe('StarredStrings', function() {
  it('Should return true', function() {
    var starFinder = new StarFinder([]);
    var input = "*a*%=3=*";

    expect(starFinder.starredLetters(input)).to.be.true;
  })

  it('Should return false', function() {
    var starFinder = new StarFinder([]);
    var input = "%*3*b%3";

    expect(starFinder.starredLetters(input)).to.be.false;
  })
});
