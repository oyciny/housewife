export default clean = (dirtyArray, instructions = { return: dirtyArray.length, order: 'default'}) => {
    if (instructions.order === 'default') {
        return dirtyArray.slice(0, instructions.return)
    }
    if (instructions.order === 'reversed') {
        return dirtyArray.slice().reverse().slice(0, instructions.return)
    }
    if (instructions.order === 'random') {
        return dirtyArray.sort(() => Math.random() - Math.random()).slice(0, instructions.return)
    }
    return dirtyArray
}