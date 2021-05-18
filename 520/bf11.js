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
    const arr = input.shift().split('');
    const map = [];

    let idx = 0;

    // S[i][j] 배열을 생성한다.
    for(let i = 0; i < n; i++){
        map.push(new Array(n).fill(null));
        for(let j = i; j < n; j++){
            map[i][j] = arr[idx++];
        }
    }

    // 결과값을 담을 배열
    const visit = [];

    dfs(0);

    function dfs(cnt){
        // 정답으로 나올수 있는 경우의 수가 많음으로 첫번째로 조건을 만족하는
        // 값을 바로 출력한다.
        if(cnt === n){
            console.log(visit.join(' '));
            process.exit();
        }
        // -10 ~ 10 이므로 총 21개 
        for(let i = 0; i < 21; i++){
            
            // i - 10을 해줘서 -10부터 해본다.
            visit.push(i - 10);
            
            //값이 조건을 만족하는지 확인한다. 
            const flag = solution();
            
            if(flag === true) {
                dfs(cnt + 1);
            }
            visit.pop();
        }  
    }
    
    function solution(){
        // visit배열 안에 존재하는 모든 값을 확인한다.
        for(let i = 0; i < visit.length; i++){
            let sum = 0;
            // 배열에 존재하는 모든 값을 더한다.
            for(let j = i; j < visit.length; j++){
                sum += visit[j];
                // 배열에 존재하는 모든 값을 더한값으로 현재 까지 구한 숫자들이 S[i][j] 
                // 배열안의 부호들과 일치하는지 확인한다.
                let check = (sum === 0 ? "0" : (sum < 0 ? '-' : '+'));
                if(check !== map[i][j]) return false;
            }
        } 
        return true;
    }
    process.exit();
});