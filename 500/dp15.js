const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // n은 배열의길이 m은 수열의 길이
    const[n, m] = input.shift().split(' ').map(num => Number(num));
    // 정렬시킨다.
    const arr = input.shift().split(' ').map(num => Number(num));
    arr.sort((a,b) => a-b);

    const visited = [];
    const output = [];
    let result = [];
    dfs(0);
    console.log(result.join('\n'));

    function dfs(cnt){
        if(cnt === m){
            if(!result.includes(output.join(' '))){
                result.push(output.join(' '));
            }
            return;
        }
        for(let i = 0; i < n; i++){
            if(visited[i]) continue;
            visited[i] = true;
            output.push(arr[i]);
            dfs(cnt + 1);
            output.pop();
            visited[i] = false;
        }
    }
    process.exit();
});
