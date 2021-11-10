function HouseWife() {
}

HouseWife.prototype.clean = function clean(array, options = { amount: array.length, order: 'default'}) {
    // Return random objects
    if (options.order === 'random') {
        return array.sort(() => Math.random() - Math.random()).slice(0, options.amount)
    }

    // Return Objects starting at the last object
    if (options.order === 'reversed') {
        return array.slice().reverse().slice(0, options.amount)
    }

    // Return Objects starting from the first object
    if (options.order === 'default') {
        return array.slice(0, options.amount)
    }

    return array
}

module.exports = HouseWife