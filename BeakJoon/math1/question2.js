const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1 => 6 => 12 => 18
rl.on('line', (line) =>{
    line = parseInt(line);
    let cnt = 1;
    let rooms = 6;
    let rooms_cnt = 0;

    for(let i = 2; i <= line; i++){
        if(rooms_cnt <= rooms){
            rooms_cnt++;
            console.log(i);
        }
        if(rooms_cnt === rooms){
            cnt++;
            rooms += 6;
            rooms_cnt = 0;
            console.log();
        }
    }
    console.log(cnt);
}).on('close', ()=>{
    process.exit();
});