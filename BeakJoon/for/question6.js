const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    line = parseInt(line);
    let answer ='';
    for(let i = line; i > 0; i--){
        answer += i + '\n';
    }
    console.log(answer);
}).on('close', ()=>{

});