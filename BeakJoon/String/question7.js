const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    line = line.split(' ');
    let num1 = parseInt(line[0].split('').reverse().join(''));
    let num2 = parseInt(line[1].split('').reverse().join(''));

    console.log(`${num1 < num2 ? num2 : num1}`);
}).on('close', ()=>{
    process.exit();
});