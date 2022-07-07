const reverseString = function(string) {
    const strInArr = string.split('');
    const outputArr = [];
    for (let i = strInArr.length - 1; i >= 0; i--) {
        outputArr.push(strInArr[i]);
    }
    return outputArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
