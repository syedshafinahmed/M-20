function numbers(array){
    let sum = 0;
    let count = 0;
    for (let number of array){
        if(number%2 !== 0){
            sum += number;
            count++;
        }
    }
    let avg = sum / count;
    return avg;
}
let add = numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(add);