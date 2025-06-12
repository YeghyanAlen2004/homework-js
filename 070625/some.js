function my_some(arr, fun, size) {
    for (let i = 0; i < size; ++i) {
        if (fun(arr[i]) === true) {
            return true;
        }
    }
    return false;
}
let my_fun = function(elem) {
    if(elem % 3 === 0) {
        return true;
    }
    return false;
}
const num = [1, 2, 3, 4, 5];

let Bool = num.some(function(element) {
    return element % 3 === 0;
});
let Bool2 = my_some(num, my_fun, num.length);

console.log(Bool2);
console.log(Bool);