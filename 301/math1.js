const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // 유클리드 호제법
    function gcd(a, b){
        while(b !== 0){
            let r = a%b;
            a = b;
            b = r;
        }
        return a;
    }


    let arr1 = input[0].split(' ').map(num => Number(num));
    let arr2 = input[1].split(' ').map(num => Number(num));
    // 동생들의 수
    let n = arr1.shift();
    // 수빈이의 현제 위치
    let s = arr1.shift();
    
    // 수빈이의 현제위치 값에서 동생의 위치를 빼준다.
    let distance = [];
    for(let i = 0; i < n; i++){
        distance.push(Math.abs(arr2[i]-s));
    }

    let step = distance[0];
    
    // 동생이 1명보다 많은 경우
    if(n !== 0){
        for(let i = 1; i < distance.length; i++){
            step = gcd(step, distance[i]);
        }
    }
    // 동생이 1명일 경우는 수빈이의 위치에서 동생의 위치 값을 뺀 값이 결과값이고,
    // 동생이 1명보다 많을경우는 순빈이의 위치에서 동생의 위치값을 뺀 값들의 
    // 최대 공약수이다.
    console.log(step);
    process.exit();
});

