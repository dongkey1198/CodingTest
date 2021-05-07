const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = Number(input.shift());
    const l = input[0].split(' ').map(num => Number(num));
    const dp1 = new Array(n).fill(1);
    const dp2 = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(l[i] > l[j] && dp1[i] < dp1[j] + 1){
                dp1[i] = dp1[j] + 1;
            }
        }
    }
    for(let i = n-2; i >= 0; i--){
        for(let j = n-1; j > i; j--){
            if(l[i] > l[j] && dp2[i] < dp2[j] + 1){
                dp2[i] = dp2[j] + 1;
            }
        }
    }

    let max = 0;
    for(let i = 0; i < n; i++){
        max = Math.max(max, dp1[i] + dp2[i]);
    }

    console.log(max - 1);
    process.exit();
});
