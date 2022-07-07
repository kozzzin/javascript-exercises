const repeatString = function(string, repetitions) {
    if (repetitions < 0) {
        return 'ERROR';
    }
    let output = '';
    for (;repetitions > 0; repetitions--) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
