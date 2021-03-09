const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input = input.map(num => parseInt(num));
    let mult = 1;
    input.map(n => mult *= n);
    
    mult = mult.toString();
    
    let arr = [0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < mult.length; i++){
        arr[(mult[i])] += 1;
    }
    arr.forEach(e=>console.log(e));
    process.exit();
});