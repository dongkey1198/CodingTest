const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split('');
}).on('close', ()=>{
    while(input.length%3 !== 0){
        input.unshift('0');
    }
    let result = "";
    while(input.length !== 0){
        let cnt = 2;
        let sum = 0;
        while(cnt !== -1){
            let tmp = Number(input.shift());
            sum += Math.pow(2, cnt) * tmp;
            cnt--;
        }
        result += `${sum}`;
    }

    console.log(result);
    process.exit();
});

