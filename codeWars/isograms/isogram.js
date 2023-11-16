// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    // Convert the string to lowercase to ignore letter case
    str = str.toLowerCase();

    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Ignore non-letter characters
        if (character.match(/[a-z]/)) {
            charCount[character] = (charCount[character] || 0) + 1;

            // If the count of any character becomes greater than 1, it's not an isogram
            if (charCount[character] > 1) {
                return false;
            }
        }
    }

    // If no character has a count greater than 1, it's an isogram
    return true;
}
module.exports = isIsogram;
