const lengthOfLastWord = function (s) {
 
    const     new_string = s.trimEnd();
    return (new_string.substring(new_string.lastIndexOf(" ")+1, new_string.length).length);
}

console.log(lengthOfLastWord("ok many               "));


