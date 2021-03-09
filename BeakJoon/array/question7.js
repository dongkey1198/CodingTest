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
    let answer ='';
    for(let i = 0; i < input.length; i++){
        let numbers = input[i].split(' ').map(el => parseInt(el));
        numbers.shift();
        
        let sum = 0;
        numbers.forEach(element => {
            sum += element;            
        });
        
        let average = sum/numbers.length;
        let count = 0;
        numbers.forEach(el => {
            if(el > average){
                count++;
            }
        });
        answer += `${(count/numbers.length*100).toFixed(3)}%\n`
    }
    console.log(answer);
    process.exit();
});