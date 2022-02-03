 const numbers = [33, 44, 55, 66, 77, 88, 99, 100];
/* let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
    console.log(sum);
}  */

function Total(number) {
    
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        return sum;
    }
}
const result = numbers(33, 44, 55, 66);
console.log(result);