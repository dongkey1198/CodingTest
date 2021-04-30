const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let n = Number(input.shift());
    let Numbers = input[0].split(' ').map(num => Number(num));
    //  길이가 n인 배열을 생성한후 0으로 초기화해준다.
    let dp = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        // 증가 값은 항상 1부터 시작함으로 1과 해당 숫자를 담은 배열을 추가해준다.
        dp[i] = [1, [Numbers[i]]];
        for(let j = 0; j < i; j++){
            // 만약 현재 숫자가 이전에 있던 숫자 보다크고 현재 값의 증가 값이 이전의 증가값 +1 보다 작을경우
            if(Numbers[i] > Numbers[j] && dp[i][0] < dp[j][0] + 1){
                //  현재 값을 담은 배열안에 이전에 값이 가지고있던 배열과 자기 자신을 추가해준다.
                dp[i][1] = [...dp[j][1], Numbers[i]];
                // 증가값을 이전의 값에 +1 값으로 재할당 한다
                dp[i][0] = dp[j][0] + 1;
            }
        }
    }
    // 가장 큰 증가 값을 가진 배열안에 부분 수열이 들어있다.
    let max = dp[0][0];
    let result = dp[0][1];
    for(let i = 1; i < dp.length; i++){
        if(max < dp[i][0]){
            max = dp[i][0];
            result = dp[i][1];
        }
    }
    console.log(`${result.length}\n${result.join(' ')}`);
    process.exit();
});