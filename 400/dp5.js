const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);    
}).on('close', ()=>{
    const N = Number(input.shift());
    const P = input[0].split(' ').map(num => Number(num));
    P.unshift(0);
    const DP = new Array(N+1).fill(0);
    DP[1] = P[1];

    for(let i = 2; i <= N; i++){
        for(let j = 1; j <= i; j++){
            // 처음 DP 배열 안의 모든 값은 0으로 초기화 되어있다. 
            // 이경우에는 첫번째 경우의 수를 할당해준다.
            if(DP[i] === 0){
                DP[i] = DP[i-j] + P[j];
            } else{
                DP[i] = Math.min(DP[i], DP[i-j] + P[j]);
            }
        }
    }
    console.log(DP[N]);
    process.exit();
});

