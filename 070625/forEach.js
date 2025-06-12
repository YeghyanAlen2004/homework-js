
function my_forEach(array,fun,size){
    for (let i = 0; i < size; ++i) {
        fun(array[i]);
    }
    return undefined;
}

let print = function(elem) {
    console.log(elem);
    return undefined;
}

let arr = [1, 2, 3, 4];

arr.forEach(function(element){
    console.log(element);
});

my_forEach(arr, print, arr.length);


