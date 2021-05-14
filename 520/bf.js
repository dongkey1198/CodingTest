const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{

    const n = Number(input.shift());
    const arr = input.shift().split(' ').map(num => Number(num));

    let k = -1;
    // 교체 해야할 값들의 가운대를 찾아준다.
    // 현재값 보다 현재값 + 1 한 값이 더클때 현재값을 중심으로 순서가 변경된다.
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < arr[i + 1]){
            k = i;
        }
    }
    // 위의 조건에 해당되지 않을시 마직막 순열이다.
    if(k === -1){
        console.log(k);
    } else{
        let m = 0;
        // 배열의 뒤에서 부터 k와 비교한다.
        // 비교값이 arr[k] 보다 크면 그값과 arr[k]를 교체해야한다.
        for(let i = arr.length - 1; i > k; i--){
            if(arr[k] < arr[i]){
                m = i;
                break;
            }
        }
        
        // 교체
        let tmp = arr[k];
        arr[k] = arr[m];
        arr[m] = tmp;
        // k  이후의 값들을 정렬해야한다.
        // k 뒤에 존재하는 값들이 2개 이상일대는 이미 내림차순으로
        // 값들이 위치한다.
        let a = arr.length - 1;
        k = k+1;
        while(k < a){
            let tmp2 = arr[k];
            arr[k] = arr[a];
            arr[a] = tmp2;
            k++;
            a--;
        }
        console.log(arr.join(' '));
    } 

    process.exit();
});
