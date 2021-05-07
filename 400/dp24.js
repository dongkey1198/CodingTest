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
    const numbers = input[0].split(' ').map(num => Number(num));
    const dp1 = new Array(n).fill(0);
    const dp2 = new Array(n).fill(0);

    dp1[0] = numbers[0];
    dp2[n-1] = numbers[n-1];

    for(let i = 1; i < n; i++){
        dp1[i] = Math.max(dp1[i-1] + numbers[i], numbers[i]);
    }
    for(let i = n-2; i >= 0; i--){
        dp2[i] = Math.max(dp2[i+1] + numbers[i], numbers[i]);
    }

    let max = Math.max(...dp1);
    for(let i = 0; i < numbers.length; i++){
        if(i === 0 || i === numbers.length - 1){
            continue;
        }
        if(max < dp1[i - 1] + dp2[i + 1]){
            max = dp1[i - 1]+ dp2[i + 1];
        }
    }
    
    console.log(max);
    process.exit();
});
