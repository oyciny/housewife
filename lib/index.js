import cleanArray from "./utils/cleanArray"

function HouseWife() {
}

HouseWife.prototype.clean = (dirtyArray, instructions = { return: dirtyArray.length, order: 'default'}) => {
    return cleanArray(dirtyArray, instructions)
}

module.exports = HouseWife()