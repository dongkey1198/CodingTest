const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(Number(line));
}).on('close', ()=>{

    function solution(num){
        let cnt = 0;
        for(let i = 2; i <= num/2; i++){
            if(isPrime[i] && isPrime[num-i]){
                cnt++;
            } else if(num/2 === isPrime[i]){
                cnt++;
            }
        }
        return cnt;
    }
    // 시작
    let max = 1000000;
    let isPrime = new Array(max + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 0; i <= max; i++){
        if(!isPrime[i]) continue;
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime[i] = false;
                break;
            }
        }
    }

    input.shift();
    let result = "";
    
    input.map(num => {
        result += `${solution(num)}\n`;
    });

    console.log(result);
    process.exit();
});

