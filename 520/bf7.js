const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = Number(input.shift());
    const arr = [];
    let result = 0;
   
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }


    dfs(0, 0); // idx, pay

    function dfs(idx, pay){
        // idx의 값이 n과 같거나 클때 
        if(idx >= n){
            result = Math.max(result, pay);
            return;
        }
        // 일한 일수가 n 보다 작을때는 pay + 새로 일한 값을 더해준다.
        if(idx + arr[idx][0] <= n) {
            dfs(idx + arr[idx][0], pay + arr[idx][1]);
        } else {
            // 일한 일수가 n을 넘을때는 pay를 보내준다.
            dfs(idx + arr[idx][0], pay);
        }

        // 그다음 index부터 시작한 값을 구한다.
        dfs(idx + 1, pay);

    }
    console.log(result);
    process.exit();
});
