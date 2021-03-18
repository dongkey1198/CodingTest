const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

let input = [];

rl.on('line', (line)=>{
    let arr = line.split(' ').map(num => parseInt(num));
    input.push(arr);
}).on('close', ()=>{
    
    input.forEach(index =>{
        let a = index[0];
        let b = index[1];
        let c = index[2];

        if(a !== 0 && b !== 0 && c !== 0){
            if((a*a)+(b*b) ===(c*c)){
                console.log('right');
            } else if((a*a)+(c*c) ===(b*b)){
                console.log('right');
            } else if((c*c)+(b*b) ===(a*a)){
                console.log('right');
            } else{
                console.log('wrong');
            }
        }

    });

    process.exit();
});