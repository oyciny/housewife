import cleanArray from "./utils/cleanArray"

const HouseWife = () => {
}

HouseWife.prototype.clean = (dirtyArray, instructions = { return: dirtyArray.length, order: 'default'}) => {
    return cleanArray(dirtyArray, instructions)
}

export default HouseWife