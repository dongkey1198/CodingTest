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
    
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }

    const visited = new Array(n).fill(false);
    const visit = [];
    
    let min = Infinity;

    dfs(0, 0);
    console.log(min);

    function dfs(idx, cnt){
        if(cnt < n){
            solution();
        }
        for(let i = idx; i < n; i++){
            if(!visited[i]){
                if(visit.length > 0 && visit[visit.length-1] > i) continue;
                visited[i] = true;
                visit.push(i);
                dfs(idx + 1, cnt + 1);
                visit.pop();
                visited[i] = false;
            }
        }
    }

    function solution(){
       
        let start_team = 0;
        let link_team = 0;

        for(let i = 0; i < n - 1; i++){
            for(let j = i + 1; j < n; j++){
                if(visited[i] === true && visited[j] === true){
                    start_team += arr[i][j] + arr[j][i];
                } else if(visited[i] === false && visited[j] === false){
                    link_team += arr[i][j] + arr[j][i];
                }
            }
        }


        let val = Math.abs(start_team - link_team);
        if(!val){
            min = 0;
        } else {
            min = Math.min(min, val);
        }
    }



    process.exit();
});

