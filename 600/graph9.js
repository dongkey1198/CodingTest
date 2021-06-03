
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = (input) => {
    const[N,M] = input.shift().split(' ').map(Number);
    const game_board = [];
    const visited = [];

    for(let i = 0; i < N; i++){
        game_board.push(input.shift().split(''));
        visited.push(new Array(M).fill(0));
    } 

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let flag = 0;

    let start_point;
    for(let x = 0; x < N; x++){
        for(let y = 0; y < M; y++){
            if(flag) break;
            start_point = {x, y};
            //console.log('start:',x, y);
            visited[x][y] = 1;
            dfs(x, y, 1);
            // visited[x][y] = 0;
    
        }
    }

    function dfs(x, y, cnt){
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            if(game_board[nx][ny] !== game_board[n][y]) continue;
            if(!visited[nx][ny]){
                //console.log(nx, ny);
                visited[nx][ny] = 1;
                dfs(nx, ny, cnt + 1);
                visited[nx][ny] = 0;
                if(flag) return;
                
            } else if( cnt > 4 && nx === start_point.x && ny === start_point.y){
                flag = 1;
                return;
            }
        }
    }
    return flag ? 'Yes':'No';
}


const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    console.log(main(input));
    process.exit();
});