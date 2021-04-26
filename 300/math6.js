const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    // DATA타입을 Number로 변경
    input.push(Number(line))
}).on('close', ()=>{
    // 0 ~ 1000000 크기의 배열을 선언하고 fill() 메서드를 사용하여 true 제할당 한다. 
    const max = 1000000;
    let isPrime = new Array(max+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for(let i = 2; i <= max; i++){
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                isPrime[i] = false;
                break;
            }
        }
    }
    while(true){
        let num = input.shift();
        let ok = false;
        if(num === 0){
            break;
        }
        for(let i = 2; i <= num/2; i++){
            if(isPrime[i] && isPrime[num-i]){
                console.log(`${num} = ${i} + ${num - i}`);
                ok = true;
                break;
            }
        }
        if(!ok){
            console.log("Goldbach's conjecture is wrong.");
        }
    }
    
    process.exit();
});