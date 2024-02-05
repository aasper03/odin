const leapYears = function(num) {
    if (num % 4 == 0) {
        if (num % 100 == 0) {
            if (num % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
