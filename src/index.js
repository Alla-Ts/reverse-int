module.exports = function reverse(n) {
    let numstring = n.toString();
    let splitString = numstring.split('');
    let reverseArray = splitString.reverse();
    let num = parseFloat(reverseArray.join('')) * Math.sign(n);
    let numReverse = Math.abs(num);


    return numReverse;


    // return (
    //     parseFloat(
    //         n
    //         .toString()
    //         .split('')
    //         .reverse()
    //         .join('')
    //     ) * Math.sign(n)
    // )
}