const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(parseInt(line));
}).on('close', ()=>{

    input.sort((a,b) => { return a-b});

    let sum = 0;
    input.forEach(num => {
        sum += num;
    });

    let sum_of_two_liar_drafts = sum - 100;
    let d1 = 0;
    let d2 = 0;

    for(let i = 0; i < input.length - 1; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] + input[j] === sum_of_two_liar_drafts){
                d1 = input[input.indexOf(input[i])];
                d2 = input[input.indexOf(input[j])];
                break;
            }
        }
    }
    let result = '';
    for(let i = 0; i < input.length; i++){
        if(input[i] !== d1 && input[i] !== d2){
            result += `${input[i]}\n`;
        }
    }
    console.log(result);
    process.exit();
});