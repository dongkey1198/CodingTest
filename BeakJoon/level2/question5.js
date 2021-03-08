const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', ()=>{
    let hh = input[0];
    let mm = input[1];

    if(mm < 45 && mm >= 0){
        mm = (60-45) + mm;
        if(hh > 0){
            hh = hh - 1;
        } 
        else if(hh == 0){
            hh = 23;
        }
    } else{
        mm = mm - 45;
    }

    console.log(hh, mm);
    
    process.exit();
});