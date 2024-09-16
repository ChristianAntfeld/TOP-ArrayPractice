let arr = [1, 2, 3, 4, 5];

function tripleSumOfEvens(array) {
    let sum = array.filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, start) => total + start);
    
    return sum;
}

console.log(tripleSumOfEvens(arr));
