const revserString = str => 
str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = revserString;