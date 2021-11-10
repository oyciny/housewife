'use strict';

import clean from './utils/clean'

export default class HouseWife {
    
    /**
     * 
     * @param {Array} dirtyArray Array that will be cleaned.
     * @param {Object} instructions Instructions for the House Wife to follow.
     * @param {Number} instructions.return Amount of items to be returned.
     * @param {String} instructions.order Order returned items will be in.
     * @returns {Array} An nice clean array.
     */
    clean(dirtyArray, instructions = { return: dirtyArray.length, order: 'default' }) {
        return clean(dirtyArray, instructions)
    }

}