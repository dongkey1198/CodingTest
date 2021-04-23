function solution(a, b){
    // 유클리드 호제법을 소스코드로 구현한것이다.
    // b의 값이 0일때 a의 값이 두 정수의 최대 공약수이다.
    while(b !==0){
        r = a%b;
        a = b;
        b = r;
    }
    return a;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input.shift();
    input.map(arr => {
        let tmp = arr.split(' ').map(num => Number(num));
        // 최소 공배수를 구하는 방법은 두 정수의 곱 나누기 두수의 최대 공약수이다.
        console.log(tmp[0]*tmp[1]/solution(tmp[0], tmp[1]));
    });
    process.exit();
});