module.exports = function reverse (n) {
    let number;
    if(n < 0) {
       number = -n
    } else {
      number = n
    }
    let arr = String(number).split("").reverse().join('')
    return Number(arr)
}
