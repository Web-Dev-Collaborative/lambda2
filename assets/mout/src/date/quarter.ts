/**
 * gets date quarter
 */
function quarter(date) {
    const month = date.getMonth();
    if (month < 3) return 1;
    if (month < 6) return 2;
    if (month < 9) return 3;
    return 4;
}

export default quarter;
