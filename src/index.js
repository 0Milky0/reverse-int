function reverse (n) {

    if (n < 0) {
        n = n * -1;
    }

    let arr = Array.from(n.toString());
    let arrReversed = arr.reverse();
    let str = "";

    for(let i = 0; i < arrReversed.length; i++) {
        str += arrReversed[i];
    }

    return str;
}

module.exports = reverse;
