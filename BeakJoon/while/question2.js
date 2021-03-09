const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", (line)=>{
    input.push(line);
}).on("close", ()=>{
    let answer = '';
    let i = 0;
    while(i !== input.length){
        let numbers = input[i].split(' ').map(num => parseInt(num));
        answer += `${numbers[0]+numbers[1]}\n`;
        i++;
    }
    console.log(answer);
    process.exit();
});