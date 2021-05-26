const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=> {
    input.push(line);
}).on('close', ()=>{
    const [n, m] = input.shift().split(' ').map(num => Number(num));
    const arr = [];
    const visited = [];
    
    for(let i = 0; i < n; i++){
        arr.push(input.shift().split('').map(num => Number(num)));
        visited.push(new Array(m).fill(false));
    }

    let result = 0;

    dfs(0, 0);
    console.log(result);

    function dfs(x, y){
        
        if(x >= n){
            check();
            return;
        }

        if(y >= m){
            dfs(x + 1, 0);
            return;
        }

        visited[x][y] = true;
        dfs(x, y + 1);
        visited[x][y] = false;
        dfs(x, y + 1);

    }

    function check(){
        let total = 0;
        for(let i = 0; i < n; i++){
            let tmp = 0;
            for(let j = 0; j < m; j++){
                if(visited[i][j]){
                    tmp *= 10;
                    tmp += arr[i][j];
                }else{
                    total += tmp;
                    tmp = 0;
                }
            }
            total += tmp;
        }

        for(let i = 0; i < m; i++){
            let tmp = 0;
            for(let j = 0; j < n; j++){
                if(!visited[j][i]){
                    tmp *= 10;
                    tmp += arr[j][i];
                } else {
                    total += tmp;
                    tmp = 0;
                }
            }
            total += tmp;
        }
        result = Math.max(result, total);
    }

    process.exit();
});
