const sumAll = function(start,end) {
    // check input type
    if (start < 0 || end  < 0 || typeof start != 'number' || typeof end  != 'number') return 'ERROR';

    // check 
    let accumulator = 0;
    for (let item = Math.min(start,end); item <= Math.max(start,end); item++) {
        accumulator += item;
    }
    return accumulator;
};

// Do not edit below this line
module.exports = sumAll;
