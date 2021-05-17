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
    const output = [];
    const visited = new Array(n).fill(false);
    let min = Infinity;
    
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }

    dfs(0, 0);
    console.log(min);

    function dfs(idx, cnt){
        if(cnt === n/2){
            // console.log(output);
            // console.log(visited);
            diff();
            return;
        }

        for(let i = idx; i < n; i++){
            if(!visited[i]){
                if(output[output.length - 1] > i) continue;
                visited[i] = true;
                output.push(i);
                dfs(idx + 1, cnt + 1);
                output.pop();
                visited[i] = false;
            }
        }
    }

    function diff(){
        let team_start = 0;
        let team_link = 0;

        for(let i = 0; i < n-1; i++){
            for(let j = i + 1; j < n; j++){
                if(visited[i]===true && visited[j] === true){
                    team_start += arr[i][j] + arr[j][i];
                } else if(visited[i]===false && visited[j] === false) {
                    team_link += arr[i][j] + arr[j][i];
                }
            }
        }
        let val = Math.abs(team_start-team_link);
        if(val === 0){
            min = 0;
        } else{
            min = Math.min(min, val);
        }
    }

    process.exit();
});
