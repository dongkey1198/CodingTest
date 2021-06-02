const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
const dnlist = [1, -1, 0, 0];
const dmlist = [0, 0, 1, -1];

rl.on('line', (line)=>{
    input.push(line.trim());
}).on('close', ()=>{
    const[M, N] = input.shift().split(num => Number(num));
    // 전체 토마토의 개수 익은것 익지 않은 것 포함
    let total_tomato = M * N;
    // 익은 토마토의 수
    let tomato = 0;

    const prevRipeList = [];

    const box = input.map((str, n) => 
        str.split(' ').map((state, m) =>{
            const num = Number(state);
            if(num === -1){
                total_tomato--;
            } else if (num === 1){
                prevRipeList.push(`${n} ${m}`);
                tomato++;
            }
            return num;
        })
    );

    let t = 0;
    const newRipeSet = new Set();
    while(true){
        prevRipeList.forEach((pos) => {
            const[m , n] = pos.split(' ').map(num => Number);
            dmlist.forEach((dm, i)=> {
                const dn = dnlist[i],
                nextM = m + dm,
                nextN = n + dn;

                if(nextM < 0 || nextM >= M || nextN < 0 || nextN >= N || box[nextM][nextN] !== 0){
                    return;
                }
                box[nextM][nextN] = 1;
                newRipeSet.add(`${nextM} ${nextN}`);
            });
        });
        if(newRipeSet.size === 0){
            break;
        }
        t++;
        tomato += newRipeSet.size;
        prevRipeList = Array.from(newRipeSet);
        newRipeSet.clear();
    }

    console.log(total_tomato === tomato ? t : -1);

    process.exit();
});
