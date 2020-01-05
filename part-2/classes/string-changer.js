function StringChanger() {}

StringChanger.prototype.nextLetter = function (originalString) {
    let fullString = originalString.toLowerCase();
    let fullStringArray = fullString.split("");
    let newString = [];

    fullStringArray.forEach(character => {
        if(character.match(/[a-z]+/)){
            newString.push(this.incrementChar(character))
        } else {
            newString.push(character)
        }
    });

    newString = newString.join("");
    
    return newString;
    
    //return "£7gDO"
}

StringChanger.prototype.incrementChar = function (character) {
    return String.fromCharCode(character.charCodeAt(0) + 2);
}

module.exports = StringChanger;