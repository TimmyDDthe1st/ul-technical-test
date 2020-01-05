const chai = require('chai');
const expect = chai.expect;
const StarFinder = require('../classes/star-finder.js');

describe('StarredStrings', function() {
  it('Should return true', function() {
    var starFinder = new StarFinder([]);

    expect(starFinder.starredLetters(input)).to.equal(result);
  })
});
