const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const N = Number(input.shift());
    input.shift();
    const arr = input[0].split(' ').map(num => Number(num));
    const Numbers = [];
    
    for(let i = 0; i <10; i++){
        if(!arr.includes(i)){
            Numbers.push(i);
        }
    }

    let result = Math.abs(N - 100);

    for(let i = 0; i < N*2; i++){
        let flag = true;
        let str = i.toString().split('').map(num=>Number(num)); 
        for(let j = 0; j < str.length; j++){
            if(!Numbers.includes(str[j])){
                flag = false;
            }
        }
        if(flag){
            result = Math.min(result, Math.abs(N - i) + str.length);
        }
    }
    console.log(result);
    process.exit();
});
