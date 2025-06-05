function sumOfArray(arr)
{
    let sum = 0;

    for(let i = 0; arr[i] != undefined; ++i)
    {
        sum += arr[i];
    }

    return sum;
}

let arr = [50, 75, 100];

console.log(sumOfArray(arr));
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
