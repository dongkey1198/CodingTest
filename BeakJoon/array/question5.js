const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let scores = input[1].split(' ').map(num => parseInt(num));
    scores.sort((a,b) => {return a-b});
    let max = scores[parseInt(input[0]-1)];
    let sum = 0;
    for(let i = 0; i < scores.length; i++){
        sum += (scores[i]/max)*100;
    }
    console.log(sum/parseFloat(input[0]));
    process.exit();
});