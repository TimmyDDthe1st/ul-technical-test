function StringChanger() {}

StringChanger.prototype.nextLetter = function (originalString) {
    let fullStringArray = originalString.split("");
    let newString = [];

    fullStringArray.forEach(character => {
        if(character.match(/[a-zA-Z]+/)){
            newString.push(this.incrementChar(character))
        } else {
            newString.push(character)
        }
    });

    newString = newString.join("");

    return newString;    
}

StringChanger.prototype.incrementChar = function (character) {
    return String.fromCharCode(character.charCodeAt(0) + 2);
}

module.exports = StringChanger;