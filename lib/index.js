import cleanArray from "./utils/cleanArray"

export default HouseWife = () => {
}

HouseWife.prototype.clean = (dirtyArray, instructions = { return: dirtyArray.length, order: 'default'}) => {
    return cleanArray(dirtyArray, instructions)
}

module.exports = HouseWife()