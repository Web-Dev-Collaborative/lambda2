"use strict";
exports.__esModule = true;
/**
 * "Convert" value into a 32-bit unsigned integer.
 * IMPORTANT: Value will wrap at 2^32.
 */
function toUInt(val) {
    // we do not use lang/toNumber because of perf and also because it
    // doesn't break the functionality
    return val >>> 0;
}
exports["default"] = toUInt;
