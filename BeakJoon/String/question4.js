const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input.shift();
    input.map(el => {
        let arr = el.split(' ');
        let answer='';
        for(let i = 0; i < arr[1].length; i++){
            for(let j = 0; j < parseInt(arr[0]); j++){
                answer += arr[1][i];
            }
        }
        console.log(answer);
    });
    process.exit();
});