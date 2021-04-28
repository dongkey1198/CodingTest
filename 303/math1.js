const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', ()=>{
    
    let N = input[0];
    let B = input[1];
    let result = '';
    while(N !== 0){
        let tmp = parseInt(N%B);
        if(tmp < 10){
            result = tmp + result;
        } else{
            result = String.fromCharCode(tmp + 55) + result;
        }
        N = parseInt(N/B);
        console.log(N, tmp);
    }
    console.log(result);
    process.exit();
});