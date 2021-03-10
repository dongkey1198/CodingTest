const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
//97
rl.on('line', (line)=>{
    for(let i = 0; i < 26; i++){
        arr[i] = -1;
    }
    for(let i = 0; i<line.length; i++){
        if(arr[line[i].charCodeAt()-97] === -1){
            arr[line[i].charCodeAt() - 97] = i;
        } 
    }

    let answer ='';
    arr.forEach(e =>{
        answer += `${e} `;
    });

    console.log(answer);
    rl.close();
}).on('close', ()=>{
    process.exit();
});