const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // 이동하고자하는 체널의 번호
    const N = Number(input.shift());
    // 고장난 숫자 버튼을 담을 배열
    const arr = [];
    // 고장난 버튼의 개수가 0이아니라면, 0일경우 빈배열
    if(Number(input.shift()) !== 0){
        arr = input[0].split(' ').map(num => Number(num));
    } 

    // 사용가능한 버튼을 담을 배열
    const Numbers = [];

    // 고장난 버튼을 제외한 모든 사용가능한 버튼을 담아준다.
    for(let i = 0; i <10; i++){
        if(!arr.includes(i)){
            Numbers.push(i);
        }
    }

    // 현재 보고있던 체널이 100이므로 이동해야하는 체널 빼기 100으로 그 차이를 구해준다.
    let result = Math.abs(N - 100);

    // 체널이 500,000 이므로 모든 경우의 수를 생각하면 10000001 개가 된다.
    for(let i = 0; i < 1000001; i++){
        let flag = true;
        let str = i.toString();
        for(let j = 0; j < str.length; j++){

            if(!Numbers.includes(Number(str[j]))){
                flag = false;
            }
        }
        if(flag){
            result = Math.min(result, Math.abs(N - i) + str.length);
        }
    }
    console.log(result);
    process.exit();
});
