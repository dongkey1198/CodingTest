const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력값 문자열을 공백을 기준으로 나누어 숫자 타입으로 변환하는 함수
const strToNum = (str) => str.split(' ').map(Number);

// 다음 좌표가 해당 체스판의 범위 안에 있는지 확인
const rangeCheck = (x, y, n) => {
    if(x >= 0 && x < n && y >= 0 && y < n) return true;
    return false;
};

const main = () => {
    // 판의 한변의 길이
    const n = Number(input.shift());
    
    // 시작점
    const[s1, s2] = strToNum(input.shift());

    // 도착점
    const [e1, e2] = strToNum(input.shift());
    
    // 나이트가 이동가능한 좌표
    const x_move = [2, 2, 1, 1, -1, -1, -2, -2];
    const y_move = [1, -1, 2, -2, 2, -2, 1, -1];
    
    // n x n크기의 2차원 배열을 생성한다. 
    const board = [];
    const visited = [];
    for(let i = 0; i < n; i++){
        board.push(new Array(n).fill(0));
        visited.push(new Array(n).fill(false));
    }

    // 시작점을 매개변수로 전달한다.
    bfs(s1, s2);
    console.log(board[e1][e2]);

    function bfs(x, y){
        const queue = [];
        // 시작점을 방문으로 표시
        visited[x][y] = true;
        queue.push({x, y});

        while(queue.length){
            const {x, y} = queue.shift();

            // 도착점에 도달했다면 더이상 다음 경우의 수를 볼필요가 없다.
            // 이지점에서 반복문 탈출
            if(x === e1 && y === e2) {
                break;
            };
            
            for(let i = 0; i < x_move.length; i++){
                const nX = x + x_move[i];
                const nY = y + y_move[i];

                // 다음 좌표가 체스판의 범위안이고 한번도 방문한적이 없다면
                if(rangeCheck(nX, nY, n) && !visited[nX][nY]){
                    board[nX][nY] = board[x][y] + 1;
                    visited[nX][nY] = true;
                    queue.push({x: nX, y: nY});
                }
            }
        }
    }
}

let input = [];
let count = 0;

// 입력을위한 코드
rl.on('line', (line)=>{
    if(count === 0){
        count = line;
    } else {
        input.push(line);
        if(input.length === 3){
            main();
            input = [];
        }
    }
});