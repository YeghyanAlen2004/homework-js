function sizeStr(str)
{
    let count = 0;
    for(let i = 0; str[i] != undefined; ++i)
    {
        ++count;
    }
    return count;
}



let str = "Hello world!";

console.log(str.length);

console.log(sizeStr(str));