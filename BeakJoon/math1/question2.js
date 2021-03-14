const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1 => 6 => 12 => 18
rl.on('line', (line) =>{
    line = parseInt(line);
    let cnt = 1;
    let next_rooms = 2;
    let rooms = 6;
    for(let i = 1 ; i <= line; i++){
        if(i === next_rooms){
            cnt++;
            next_rooms += rooms;
            rooms += 6;
        }
    }
    console.log(cnt);
}).on('close', ()=>{
    process.exit();
});