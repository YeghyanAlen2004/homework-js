function indexOfTarget(arr, target)
{
    for(let i = 0; arr[i] != undefined; ++i)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;
}

let arr = [1, 3, 4, 6, 7, 9];

let target = 9;

console.log(indexOfTarget(arr, target));
console.log(arr.indexOf(target));