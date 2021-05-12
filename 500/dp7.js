const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const T = Number(input.shift());

    const arr = [];

    for(let i = 0; i < T; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }
    
    for(let i = 0; i < T; i++){
        const[M, N, x, y] = arr[i];
        console.log(solution(M, N, x, y));
    }
    
    function solution(m, n, x, y){
        while(x <= m*n){
            if((x-y)%n === 0){
                return x;
            }
            x += m;
        }
        return -1;
    }

    process.exit();
});
