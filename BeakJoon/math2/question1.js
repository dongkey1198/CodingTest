const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);

}).on('close', ()=>{
    let count = parseInt(input.shift());
    let isPrimeNums = input[0].split(' ').map(num => parseInt(num));
    
    for(let i = 0; i < isPrimeNums.length; i++){
        if(isPrimeNums[i] === 0 || isPrimeNums[i] === 1){
            count--;
            continue;
        }
        for(let j = 2; j <= Math.sqrt(isPrimeNums[i]); j++){
            if(isPrimeNums[i] % j === 0){
                count--;
                break;
            }
        }
    }
    console.log(count);
    process.exit();
});



