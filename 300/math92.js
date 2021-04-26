const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', ()=>{
    let n = input[0];
    let m = input[1];

    let five = solution(n, 5) - solution(m, 5) - solution(n-m, 5);
    let two = solution(n, 2) - solution(m, 2) - solution(n-m, 2);

    console.log(Math.min(five, two));

    function solution(n, k){
        cnt = 0;
        while(n){
            n = parseInt(n/k);
            cnt += n;
        }
        return cnt;
    }
    process.exit();
});

