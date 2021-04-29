const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // 뽑아야하는 카드의 개수
    const N = Number(input.shift());
    // 가격의 정보를 가진 배열 index값을 카드팩의 넘버와 맞추기위해 배열 가장 앞쪽에 0을 추가한다.
    const P = input[0].split(" ").map(num => Number(num));
    P.unshift(0);
    const dp = new Array(N+1).fill(0);

    // 카드를 한장 뽑아야할때는 어떠한 경우에도 첫번째 팩을 뽑아야한다.
    dp[1] = P[1];
    // dp[1]은 직관적으로 알수 있으므로 dp[2] 부터 구한다.
    for(let i = 2; i <= N; i++){
        for(let j = 1; j <= i; j++){
            dp[i] = Math.max(dp[i], P[j] + dp[i-j]);
        }
    }
    console.log(dp[N]);
    process.exit();
});

