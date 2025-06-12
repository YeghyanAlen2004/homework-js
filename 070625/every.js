let my_fun = function(elem) {
    if(elem / 1 > 0) {
        return true;
    }
    return false;
}

function my_every(arr, fun, size) {
    for (let i = 0; i < size; ++i) {
        if(fun(arr[i]) === false) {
            return false;
        }
    }
    return true;
}

const num = [1, 2, 3, 4, 5];

let Bool = num.every(function(element){
    return element / 1 >= 1;
});

let Bool2 = my_every(num, my_fun, num.length);

console.log(Bool2);
console.log(Bool);