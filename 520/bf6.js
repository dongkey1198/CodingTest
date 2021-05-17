const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const[l, c] = input.shift().split(' ').map(num => Number(num));
    const arr = input.shift().trim().split(' ').sort();
    const visited =[];
    const visit = [];
    const result = [];
    const check_letter = ['a', 'e', 'i','o', 'u'];

    
    function dfs(cnt) {
        if(cnt === l){
            let flag = check(visit);
            if(flag) result.push(visit.join(''));
            return;
        }
        for(let i = 0; i < arr.length; i++){
            if(visited[i]) continue;
            if(visit[visit.length-1] > arr[i]) continue;
            visited[i] = true;
            visit.push(arr[i]);
            dfs(cnt + 1);
            visit.pop();
            visited[i] = false;
        }
    }

    function check(visit){
        let cnt1 = 0; //자음
        let cnt2 = 0; //모음

        for(let i = 0; i < visit.length; i++){
            if(check_letter.includes(visit[i])){
                cnt2++;
            } else if(!check_letter.includes(visit[i])){
                cnt1++
            }
        }
        if(cnt1 >= 2 && cnt2 >= 1){
            return true;
        }
        return false;
    }

    dfs(0);

    console.log(result.join('\n'));
    
    process.exit();
});
