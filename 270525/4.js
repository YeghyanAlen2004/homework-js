function ReverseString(a)
{
    str = "";

    for(let i = a.length - 1; i >= 0; --i)
    {
        str += a[i];
    }
    return str;
}

let a = "Hello World!";

console.log(ReverseString(a));

