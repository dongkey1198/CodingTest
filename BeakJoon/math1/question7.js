const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let N = parseInt(line);
    let three = 0;
    while(true){
        if(N % 5 == 0){
            console.log(N/5 + three);
            break;
        } else if(N<0){
            console.log(-1);
            break;
        }
        three++;
        N -= 3;
    }

    // if(N%3 !==0 && N%5 !== 0){
    //     if((N-3)%5 === 0){
    //         answer++;
    //         N -= 3;
    //         answer += N/5;
    //         console.log(answer); 
    //     } else if((N-5)%3 === 0){
    //         answer++;
    //         N -= 5;
    //         answer += N/3;
    //         console.log(answer);
    //     } else{
    //         console.log(-1);
    //     }
    // } else if(N%3 === 0 && N%5 !== 0){
    //     console.log(N/3);
    // } else if(N%5 === 0 && N%3 !== 0){
    //     console.log(N/5);
    // } else{
    //     sum += N/5;
    //     N %= 5;
    //     sum += N/3;
    // }

}).on('close', ()=>{
    process.exit();
});