'use strict';

function HouseWife() {}

HouseWife.prototype.clean = function clean(array) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { amount: array.length, order: 'default' };

    // Return random objects
    if (options.order === 'random') {
        return array.sort(function () {
            return Math.random() - Math.random();
        }).slice(0, options.amount);
    }

    // Return Objects starting at the last object
    if (options.order === 'reversed') {
        return array.slice().reverse().slice(0, options.amount);
    }

    // Return Objects starting from the first object
    if (options.order === 'default') {
        return array.slice(0, options.amount);
    }

    return array;
};

module.exports = HouseWife;