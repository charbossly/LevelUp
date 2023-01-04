/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let status = false;

    if (1 <= word.length && word.length <= 100 && (word.toLowerCase() == word || word.toUpperCase() == word || word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  == word)){
        status = true;
    }
    return status;
};