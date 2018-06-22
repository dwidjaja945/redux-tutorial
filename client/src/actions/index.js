import types from './types';

// =================================
// ===== export functions here =====
// =================================

export function incrementCount(count) {
    debugger;
    return {
        type: types.INCREMENT_COUNT,
        payload: ++count
    }
}

export function decrementCount(count) {
    return {
        type: types.DECREMENT_COUNT,
        payload: --count
    }
}
