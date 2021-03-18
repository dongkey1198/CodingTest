const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    let answer = "";
    for(let i = 0; i < input.length; i++){
        if(input[i] <= 0) break;
    
        let n = input[i] + 1;
        let n2 = 2 * input[i];
        let numbers = n2 - n;
        let cnt = n2 - n + 1;
        for(let j = 0; j <= numbers; j++){
            let isPrime = true;
            if(n === 1){
                cnt--;
                n++;
                isPrime = false;
            }
            for(let k = 2; k <= Math.sqrt(n); k++){
                if(n % k === 0){
                    cnt--;
                    n++;
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                n++;
            }
        }
        answer += `${cnt}\n`;
    }
    console.log(answer);
    process.exit();
});