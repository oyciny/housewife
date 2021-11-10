"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cleanArray = require("./utils/cleanArray");

var _cleanArray2 = _interopRequireDefault(_cleanArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HouseWife = function HouseWife() {};

HouseWife.prototype.clean = function (dirtyArray) {
    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { return: dirtyArray.length, order: 'default' };

    return (0, _cleanArray2.default)(dirtyArray, instructions);
};

exports.default = HouseWife;