const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);    
}).on('close', ()=>{

    const n = Number(input.shift());
    const command = [];
    const S = new Array(21).fill(false);
    
    for(let i = 0; i < input.length; i++){
        command.push(input[i].split(' '));
    }

    for(let i = 0; i < n; i++){
        const cmd = command[i][0];
        const value = Number(command[i][1]);
        
        switch(cmd){
            case 'add':
                if(!S[value]) S[value] = true;
                break;
            case 'remove':
                if(S[value]){
                    S[value] = false;
                }
                break;
            case 'check':
                console.log(Number(S[value]));
                break;
            case 'toggle':
                if(S[value]) S[value] = false;
                else S[value] = true;
                break;
            case 'all':
                S.fill(true);
                break;
            case 'empty':
                S.fill(false);
                break;
        }
    }
    process.exit();
});
