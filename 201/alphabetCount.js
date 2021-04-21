const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let word = '';

rl.on('line', (line)=>{
    word = line;
}).on('close', ()=>{
    //알파벳은 총 26개 이다.
    const arr = new Array(26);

    // 0~25 인덱스까지 0으로 초기화 해준다.
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0;
    }

    // 알파벳 a의 아스키 코드값은 97이다.
    // 소문자 알파벳의 아스키코드값 - 97을 하면 해당 알파벳의 인덱스 값이나온다.
    for(let c = 0; c < word.length; c++){
        arr[word[c].charCodeAt(0) - 97]++;
    }
    let result = "";
    for(let i in arr){
        result +=`${arr[i]} `;
    }
    console.log(result.trim());
    process.exit();
});