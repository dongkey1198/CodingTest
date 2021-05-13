const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{

    const [n, m] = input.shift().split(' ').map(num => Number(num));
    const arr = input.shift().split(' ').map(num => Number(num));
    arr.sort((a,b) => a-b);
    const visitied = [];
    const output = [];
    let result = '';

    dfs(0);
    console.log(result);

    function dfs(cnt){
        if(cnt === m){
            result += `${output.join(' ')}\n`;        
            return;
        }
        for(let i = 0; i < n; i++){
            if(visitied[i]) continue;
            if(output.length > 0 && output[output.length-1] > arr[i]) continue;
            visitied[i] = true;
            output.push(arr[i]);
            dfs(cnt + 1);
            output.pop();
            visitied[i] = false;
        }
    }
    process.exit();
});
