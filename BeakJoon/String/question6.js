const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.trim().split(' ');
    let cnt = 0;
    for(let i in input){
        if(input[i] !== ''){
            cnt++;
        }
    }
    console.log(cnt);
}).on('close', ()=>{
    process.exit();
});