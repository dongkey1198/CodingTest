const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    line = line.split('');
    let cnt = 0;
    line.forEach(element => {
        let n = element.charCodeAt();
        if(n >= 65 && n <= 67){
            cnt += 3;
        } else if(n >= 68 && n <= 70){
            cnt += 4;
        } else if(n >= 71 && n <= 73){
            cnt += 5;
        } else if(n >= 74 && n <= 76){
            cnt += 6;
        } else if(n >= 77 && n <= 79){
            cnt += 7;
        } else if(n >= 80 && n <= 83){
            cnt += 8;
        } else if(n >= 84 && n <= 86){
            cnt += 9;
        } else if(n >= 87 && n <= 90){
            cnt += 10;
        }
    });
    console.log(cnt);
}).on('close', ()=>{
    process.exit();
});