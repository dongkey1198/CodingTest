const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=> {
    let N = parseInt(line);
    let answer = '';
    if(N !== 1){
        while(N >= 1){
            let isPrime = true;
            for(let i = 2; i <= Math.sqrt(N); i++){
                if(N%i === 0){
                    N = parseInt(N/i);
                    answer += `${i}\n`;
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                answer += `${N}\n`;
                break;
            }
        }
        console.log(answer);
    }
    rl.close();
}).on('close', ()=>{
    process.exit();
});