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
    input.forEach(el => {
        let i = el.split(' ').map(el => parseInt(el));
        let H = i[0];
        let W = i[1];
        let N = i[2];
        let room_H = N%H === 0 ? H*100:(N - (H * parseInt(N/H))) * 100;
        let room_W = Math.ceil(N/H);
        console.log(room_H+room_W);
    });
    process.exit();
});