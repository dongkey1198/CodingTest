const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let T = parseInt(input.shift());
    let answer = '';
    for(let i = 0; i < input.length; i++){
        let count = 1;
        let score = 0;
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j] === 'O'){
                score += count;
                count ++;
            } else{
                count = 1;
            }
        }
        answer += `${score}\n`
    }
    console.log(answer);
    process.exit();
});