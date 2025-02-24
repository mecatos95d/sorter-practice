function sorter(a, b, sort) {
    if (typeof sort === "function") return direction * (sort(a, b) ?? 0);
    // null-undefined
    if (a === null || a === undefined) return 1;
    if (b === null || b === undefined) return -1;
    // number-NaN problem
    const cmpNaN = isNaN(a) - isNaN(b);
    if (cmpNaN !== 0) return cmpNaN;
    // Simplified
    return direction * (a > b ? 1 : -1);
    // Complexed
    // return direction * (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}
