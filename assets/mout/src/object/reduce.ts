import forOwn from './forOwn';
import size from './size';

/**
 * Object reduce
 */
function reduce(obj, callback, memo, thisObj?: any) {
    let initial = arguments.length > 2;

    if (!size(obj) && !initial) {
        throw new Error('reduce of empty object with no initial value');
    }

    forOwn(obj, function(value, key, list) {
        if (!initial) {
            memo = value;
            initial = true;
        } else {
            memo = callback.call(thisObj, memo, value, key, list);
        }
    });

    return memo;
}

export default reduce;
