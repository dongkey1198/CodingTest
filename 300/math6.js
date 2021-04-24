const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line)
}).on('close', ()=>{
    let result = [];
    let isPrime = new Array(1000001).fill(false);
    isPrime[0] = true;
    isPrime[1] = true;

    for(let i = 0; i < Math.sqrt(isPrime.length); i++){
        if(isPrime[i]){
            continue;
        }
        for(let j = i * i; isPrime.length; j += i){
            isPrime[j] = true;
        }
    }
    input.map(num => {
        num = Number(num);
        let a = 0;
        let b = num;
        if(num !== 0){
            if(!isPrime[a] && !isPrime[b]){
                result.push(`${num} = ${a} + ${b}`);
            }
            a++;
            b++;
        }
    });
    console.log(result);

    process.exit();
});