const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (N)=>{
    let sum = 0;
    for(let i = 1; i<=N ; i++){
        sum += i;
    }
    console.log(sum);
}).on('close', ()=>{
    process.exit();
});