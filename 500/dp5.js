const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = line;
}).on('close', ()=>{

    const length = input.length;
    let result = 0;
    
    // 구해야하는 총자리수 -1 한 부분까지 먼저 구해준다.
    //  예를들어 주어진 값이 3자리 수일 경우 2자리 수 까지의
    // 모든 경우의 숫자들의 개수를 더해준다. 
    for(let i = 0; i < length - 1; i++){
        result += 9 * (10**i) * (i+1);  // i+1 을 해주는 이유는 두자리 수부터는 길이가 2씩  세자리 수부터는 3씩 늘어 나기때문이다.
    }
    
    // 마지막 자릿수의 숫자들을 구해준다. 
    result += (Number(input) - 1 * (10**(length - 1)) + 1) * length;

    console.log(result);
    
    process.exit();
});