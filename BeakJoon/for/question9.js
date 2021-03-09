const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    line = parseInt(line);
    let answer = "";
    for(let i = 1; i <= line; i++){
        for(let j = 1; j <= i; j++){
            answer += '*';
        }
        answer += '\n';
    }
    console.log(answer);
    rl.close();
}).on('close', ()=>{
    process.exit();
});