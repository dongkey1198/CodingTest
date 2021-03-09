const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (N)=>{
    N = parseInt(N);
    let answer ="";
    for(let i = 1; i<=N ; i++){
        answer += i +'\n';
    }
    console.log(answer);

}).on('close', ()=>{
    process.exit();
});