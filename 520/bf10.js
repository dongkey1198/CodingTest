const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = Number(input.shift());
    const arr = input.shift().trim().split(' ');
    // 0 ~ 9 = 10개
    const visited = new Array(10).fill(false);
    const visit = [];
    const result = [];

    let max = 0;
    let min = Infinity;

    dfs(0);

    // 주의 정수는 하나의 문자열이 되어야한다.
    console.log(result[result.length-1] +'\n'+ result[0]);



    function dfs(cnt){
        if(cnt === n + 1){
            solution();
            return;
        }
        for(let i = 0; i <= 9; i++){
            if(visited[i]) continue;
            visited[i] = true;
            visit.push(i);
            dfs(cnt + 1);
            visit.pop();
            visited[i] = false;
        }
    }

    function check(a,b,c){
        if(c === '<'){
            if(a > b) return false;
        } else if(c === '>'){
            if(a < b) return false;
        }
        return true;
    }

    function solution(){
        let flag = false;
        for(let i = 0; i < n; i++){
            for(let j = i; j < n; j++){
                flag = check(visit[j], visit[j+1], arr[i]);
                break;
            }
            // 앞의 부등호가 false라면 뒤를 볼필요가 없다.
            if(!flag) break;
        }
        
        if(flag){
            // console.log(visit, flag);
            // console.log(visit);
            const num = visit.join('');
            result.push(num);
        }
    }

    process.exit();
});