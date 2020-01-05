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

    for(var i = 0; i < newString.length; i++) {
        if(newString[i].match(/[aeiouAIEOU]/)) {
            newString[i] = this.capitalize(newString[i]);
        }
    }

    newString = newString.join("");

    return newString;    
}

StringChanger.prototype.incrementChar = function (character) {
    var charCodeB = 98;
    var charCodeA = 97;

    if(character == 'z') {
        // return b
        return String.fromCharCode(charCodeB);
    } else if(character == 'Z') {
        // return B
        return this.capitalize(String.fromCharCode(charCodeB));
    } else if(character == 'y') {
        // return a
        return String.fromCharCode(charCodeA);
    } else if(character == 'Y') {
        // return A
        return this.capitalize(String.fromCharCode(charCodeA));
    } else {
        return String.fromCharCode(character.charCodeAt(0) + 2);
    }
}

StringChanger.prototype.capitalize = function (character) {
    if(character == 'A') {
        return character;
    }
    return String.fromCharCode(character.charCodeAt(0) - 32);
}

module.exports = StringChanger;