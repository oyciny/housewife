'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = clean = function clean(dirtyArray) {
    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { return: dirtyArray.length, order: 'default' };

    if (instructions.order === 'default') {
        return dirtyArray.slice(0, instructions.return);
    }
    if (instructions.order === 'reversed') {
        return dirtyArray.slice().reverse().slice(0, instructions.return);
    }
    if (instructions.order === 'random') {
        return dirtyArray.sort(function () {
            return Math.random() - Math.random();
        }).slice(0, instructions.return);
    }
    return dirtyArray;
};