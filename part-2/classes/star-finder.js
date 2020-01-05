function StarFinder() {}

StarFinder.prototype.starredLetters = function (originalString) {
    if(originalString.match(/\*[a-zA-Z]\*/)) {
        return true;
    } else {
        return false;
    }
}

module.exports = StarFinder;