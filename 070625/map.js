let my_odd = function (elem) {
    if (elem % 2) {
        return elem;
    }
    return undefined;
}

function my_map(arr, fun, size) {
    let array = [];
    for (let i = 0; i < size; ++i) {
        array.push(fun(arr[i]));
    }
    return array;
}


let arr = [1, 2, 3, 4];


const arr1 = arr.map(function(element){
    if (element % 2) {
        return element;
    }
}); 
const arr2 = my_map(arr, my_odd, arr.length);

console.log(arr2);
console.log(arr1);