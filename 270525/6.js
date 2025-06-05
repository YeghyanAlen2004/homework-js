function strstr(str1, str2)
{
    let j = 0;
    for(let i = 0; str1[i] !== undefined; ++i)
    {
        
        if(str1[i] === str2[j]){

            let k = i;
        while(str2[j] !== undefined)
        {
            if(str1[k] !== str2[j])
            {
                break;
            }
            ++k;
            ++j;

        }
        if(str2[j] === undefined){
            return true;
        }
    
    }
    j = 0;
    }
    return false;
}

let str1 = "jjavascript";
let str2 = "java";

console.log(strstr(str1, str2));

console.log(str1.includes(str2));