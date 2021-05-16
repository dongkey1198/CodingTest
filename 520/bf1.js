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

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]) {
            k = i;
        }
    }

    if(k === -1){
        console.log(k);
    } else {
        let m = 0;
        for(let i = arr.length-1; i > k; i--){
            if(arr[k] > arr[i]){
                m = i;
                break;
            }
        }
        // 교체
        let tmp = arr[k];
        arr[k] = arr[m];
        arr[m] = tmp;

        let l = arr.length - 1;
        k += 1;
        while(k < l){
            tmp = arr[k];
            arr[k] = arr[l];
            arr[l] = tmp;
            k++;
            l--;
        }
        console.log(arr.join(' '));
    }
    process.exit();
});

