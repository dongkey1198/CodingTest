
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    let arr = line.split(" ").map(el => parseInt(el));
    input.push(arr);
}).on('close', ()=>{
    let people = input.shift()[0];
    let answer = "";
    for(let i = 0; i < people; i++){
        let k = 1;
        for(let j = 0; j < people; j++){
            if(input[i] === input[j]){
                continue;
            }
            else if(input[i][0] < input[j][0] && input[i][1] < input[j][1]){
                k++;
            }
        }
        answer += `${k} `;
    }
    console.log(answer);
    process.exit();
});
