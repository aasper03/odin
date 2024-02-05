const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    let ret = "";
    for (let i = 0; i < times; i++) {
        ret += str;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
