function customToUpperCase(str) {
  let result = "";

  for (let i = 0; str[i] != undefined; i++) {
    const code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i]; 
    }
  }

  return result;
}

let str = "Hello world!";

console.log(customToUpperCase(str));

console.log(str.toUpperCase());