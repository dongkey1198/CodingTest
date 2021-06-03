const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{

    const[n, m] = input.shift().split(' ').map(Number);
    const game_board = [];
    const visited = [];

    for(let i = 0; i < n; i++){
        game_board.push(input.shift().split(''));
        visited.push(new Array(m).fill(false));
    } 


    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(!visited[i][j]){
                const flag = dfs(i, j, -1, -1, game_board[i][j]);
                console.log(visited);
                if(flag) {
                    console.log('Yes');
                    process.exit();
                }
            }
        }
    }
    console.log('No');

    function dfs(y, x, by, bx, ch){
        // 시작좌표로 돌아왔을때 재귀함수를 빠져나가기 위해
        if(visited[y][x]) return true;
    
        visited[y][x] = true;
    
        for(let i = 0; i < 4; i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 범위를 벗어나면 제외
            if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
            // 다음 값이 현재 값과 다르면 제외
            if(game_board[ny][nx] !== ch) continue;
            // 다음위치 좌표와 이전 위치 좌표가 같으면 제외
            if(ny === by && nx === bx) continue;
            // 
            if(dfs(ny, nx, y, x, ch)) return true;
        }
        return false;
    }

    process.exit();
});