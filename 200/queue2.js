const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(el => parseInt(el));    
}).on('close', ()=>{
    let N = input[0];
    let K = input[1];
    let queue = [];
    let result = "<";
    // 1 부터 ~ N만큼 배열에 오름차순으로 저장
    for(let i = 1; i <= N; i++){
        queue.push(i);
    }

    let cnt = 0;
    // queue배열의 길이가 0이 될때까지 반복한다.
    while(queue.length){
        cnt++;
        // cnt와 K의 값이 일치할경우 result변수에 값을 추가한다.
        if(cnt === K) {
            result += queue.shift();
            // queue배열에 값이 남아있을경우 , 와 공백을 result에 추가한다.
            if(queue.length){
                result += ', ';
                cnt = 0;
            } 
            // queue배열의 길이가 0일경우 더이상 result에 추가할 값이 없음으로 > 추가한다.
            else {
                result += '>';
            }
            // K번째 수가 아닐경우 큐에서 shift하는 즉시 바로 다시 push해줘 queue의 맨뒤로 보내준다.
        } else {
            queue.push(queue.shift());
        }
    }
    console.log(result);
    
    process.exit();
});