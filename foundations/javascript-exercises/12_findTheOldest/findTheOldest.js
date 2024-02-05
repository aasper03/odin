const findTheOldest = function(arr) {
    arr.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    ret = arr[0].name + '';
    console.log(ret);
    return ret;
};

// Do not edit below this line
module.exports = findTheOldest;
