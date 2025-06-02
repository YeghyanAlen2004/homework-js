function contactArray(arr1, arr2)
{
    arr3 = [];
    for(let i = 0; arr1[i] != undefined; ++i)
    {
        arr3 += arr1[i];
    }
    for(let i = 0; arr2[i] != undefined; ++i)
    {
        arr3 += arr2[i];
    }

    return arr3;
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [];
arr3 = contactArray(arr1, arr2);
 
console.log(arr3);

let arr4 = arr1.concat(arr2, arr3);

console.log(arr4);