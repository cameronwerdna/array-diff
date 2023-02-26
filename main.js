function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
  }


console.log(arrayDiff([1,2,3,4,5], [1])) // => [ 2, 3, 4, 5 ]
console.log(arrayDiff([2,2,2,4,5,6,7,7,8,9,90,,4,3,5], [1,2,3,4,5])) // => [ 6, 7, 7, 8, 9, 90 ]
console.log(arrayDiff([3,44, 34, 5, 6, 75], [44,75])) // => [ 3, 34, 5, 6 ]