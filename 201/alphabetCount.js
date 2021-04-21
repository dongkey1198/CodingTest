const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let word = '';

rl.on('line', (line)=>{
    word = line;
}).on('close', ()=>{
    const arr = new Array(26);
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0;
    }
    for(let c = 0; c < word.length; c++){
        arr[word[c].charCodeAt(0) - 97]++;
    }
    let result = "";
    for(let i in arr){
        result +=`${arr[i]} `;
    }
    console.log(result.trim());
    process.exit();
});