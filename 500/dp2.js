const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{

    const E = input[0];
    const S = input[1];
    const M = input[2];

    let year = 1;

    while(true){
        if((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0){
            console.log(year);
            break;        
        }
        year++;
    }
    process.exit();
});
