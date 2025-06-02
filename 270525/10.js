function sumOfArray(arr)
{
    let sum = 0;
    for(let i = 0; arr[i] != undefined; ++i)
    {
        let num = arr[i];
        if(typeof(num) === "number"){
            sum += num;
        }
    }
    return sum;
}

let arr = ["Helllo", 0, 2, 4];


console.log(sumOfArray(arr)); 