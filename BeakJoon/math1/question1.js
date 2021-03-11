const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    line = line.split(' ').map(n => parseInt(n));
    
    if(line[1] >= line[2]){
        console.log(-1);
    } else {
        console.log(Math.floor(line[0]/(line[2]-line[1])) + 1);
    }
    rl.close();
}).on('close', ()=>{
    process.exit();
}); 