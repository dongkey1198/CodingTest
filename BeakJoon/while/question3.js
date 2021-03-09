const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line)=>{
    let N = parseInt(line);
    let count = 0;
    while(true){
        let num1 = (N % 10) * 10;
        let num2 = (parseInt(N / 10)+(N % 10)) % 10;
        N = num1 + num2;
        count++;
        if(N === parseInt(line)){
            break;
        }
    }
    console.log(count);
    
}).on('close', ()=>{
    process.exit();
});