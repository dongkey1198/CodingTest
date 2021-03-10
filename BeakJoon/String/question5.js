const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let arr = [];
    for(let i = 0; i < 26; i++){
        arr[i] = 0;
    }
 
    for(let i = 0; i < line.length; i++){
        let alpha_num = line[i].charCodeAt();
        if(alpha_num >= 97 && alpha_num <= 122 ){
            arr[alpha_num - 97] = arr[alpha_num - 97] + 1 ;
        } 
        else if(alpha_num >= 65 && alpha_num <= 90 ){
            arr[alpha_num - 65] = arr[alpha_num - 65] + 1 ;
        }
    }
    let max = 0;
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            index = i;
        } else if(max !== 0 && max === arr[i]){
            index = -1;
        }
    }
    if(index > -1){
        console.log(String.fromCharCode(index+65));
    }
    else{
        console.log('?');
    }
    
}).on('close', ()=>{
    process.exit();
});