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
    const arr = input.shift().split(' ').map(num => Number(num));
    const visitied = [];
    const output = [];
    let result = 0;
    dfs(0);
    console.log(result);

    function dfs(cnt){
        if(cnt === n){
            let tmp = solution();
            result = result < tmp ? tmp : result;  
        }
        for(let i = 0; i < arr.length; i++){
            if(visitied[i]) continue;
            visitied[i] = true;
            output.push(arr[i]);
            dfs(cnt + 1);
            output.pop();
            visitied[i] = false;
        }
    }

    function solution(){
        let tmp = 0;
        for(let i = 0; i <  output.length - 1; i++){
            tmp +=  Math.abs(output[i] - output[i + 1]);
        }
        return tmp;
    }
    process.exit();
});

