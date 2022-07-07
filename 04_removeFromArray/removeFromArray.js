const removeFromArray = function() {
    const inputArray = arguments[0];
    const toRemove = [...arguments].slice(1);
    return inputArray.filter(x => !toRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
