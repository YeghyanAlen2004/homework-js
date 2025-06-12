let my_fun = function(element) {
    if (element >= 4) {
        return element;
    }
};

function my_filter(arr, fun, size){
    let res = [];
    for (let i = 0; i < size; ++i) {
        if (my_fun(arr[i]) !== undefined){
        res.push(my_fun(arr[i]));
        }
    } 

    return res;
}


const num = [1, 2, 3, 4, 5];

const num2  = num.filter(function(elem) {
    if(elem >= 4) {
        return elem;
    }
});

const num3 = my_filter(num, my_fun,num.length);

console.log(num3);
console.log(num2);