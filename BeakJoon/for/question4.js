const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let N = parseInt(input[0]);
let answer = '';

for(let i = 1; i <= N; i++){
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(answer);