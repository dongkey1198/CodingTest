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
    const visited = new Array(n).fill(false);
    let min = Infinity;
    
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }
    
    dfs(0, 0);
    
    function dfs(idx, cnt){

        if(cnt === n/2){
            calc();
            return;
        }
        for(let i = idx; i <= n; i++){
            if(!visited[i]){
                visited[i] = true;
                dfs(i + 1, cnt + 1);
                visited[i] = false;
            }
        }
    }

    function calc(){
        let team_start = 0;
        let team_link = 0;

        for(let i = 0; i < n - 1; i++){
            for( let j = i +1; j < n; j++){
                if(visited[i] && visited[j]){
                        team_start += arr[i][j];
                        team_start += arr[j][i];
                } else if(!visited[i] && !visited[j]){
                        team_link += arr[i][j];
                        team_link += arr[j][i];
                }
            }
        }

        let val = Math.abs(team_start - team_link);

        if(val === 0){
            return min = 0;
        }

        min = Math.min(min, val);
    }

    console.log(min);
    
    process.exit();
});
