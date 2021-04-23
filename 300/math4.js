const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let n = parseInt(input.shift());
    let arr = input[0].split(' ').map(num => parseInt(num));

    for(let i = 0; i <arr.length; i++){
        if(arr[i] === 0 || arr[i] === 1){
            n--;
            continue;
        }
        for(let j = 2; j < Math.sqrt(arr[i]); j++){
            if(arr[i]%j === 0){
                n--;
                break;
            }
        }
    }
    console.log(n);
    process.exit();
});