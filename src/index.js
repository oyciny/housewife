import cleanArray from "@/cleanArray"

const HouseWife = () => {
    const clean = (dirtyArray, instructions = { return: dirtyArray.length, order: 'default'}) => {
        return cleanArray(dirtyArray, instructions)
    }
}

export default HouseWife