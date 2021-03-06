/**
 * Array reduceRight
 */
function reduceRight(arr, fn, initVal) {
    // check for args.length since initVal might be "undefined" see #gh-57
    let hasInit = arguments.length > 2;

    if (arr == null || !arr.length) {
        if (hasInit) {
            return initVal;
        } else {
            throw new Error('reduce of empty array with no initial value');
        }
    }

    let i = arr.length;
    let result = initVal;
    let value;
    while (--i >= 0) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        value = arr[i];
        if (!hasInit) {
            result = value;
            hasInit = true;
        } else {
            result = fn(result, value, i, arr);
        }
    }
    return result;
}

export default reduceRight;
