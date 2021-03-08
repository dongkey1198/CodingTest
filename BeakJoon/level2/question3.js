const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let year = parseInt(line);

    if(year % 4 == 0 && year % 100 != 0){
        console.log(1);
    }
    else if(year % 100 == 0){
        if(year % 400 == 0){
            console.log(1);
        } else{
            console.log(0);
        }
    } else{
        console.log(0);
    }

}).on('close', ()=>{
    process.exit();
});