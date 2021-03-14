const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    line = parseInt(line);
    let c = 0;
    let cnt = 0;
    let section = 1;

    while(cnt !== line){
        if(c === section){
            c = 0;
            section++;    
        }
        c++; 
        cnt++;
    }
    console.log(section%2 === 0 ? `${c}/${(section+1) - c}` :`${(section+1) - c}/${c}`);
}).on('exit', ()=>{
    process.exit();
});