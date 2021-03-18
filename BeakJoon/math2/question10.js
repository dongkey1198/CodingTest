const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let r = parseInt(line);
    let u = Math.pow((Math.PI * r), 2);
    console.log(Math.PI);
}).on('close', ()=>{
    process.exit();
});