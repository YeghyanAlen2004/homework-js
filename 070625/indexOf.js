function my_indexOf(arr, target, index) {
    for(let i = arr.length + (index) ; i < arr.length; ++i) {
        if(arr[i] === target) {
            return i;
        }
    }

    return -1;
}

let str = "Hello";

let res = str.indexOf('o', -2);
let res1 = my_indexOf(str, 'o', -2);
console.log(res1);
console.log(res);