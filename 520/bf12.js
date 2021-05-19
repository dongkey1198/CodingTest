class Solution{
    constructor(arr){
        this.arr = new Array(21).fill(false);
    }
    add(value){
        if(!this.check(value)) this.arr[value] = true;
        return;
    }
    remove(value){
        if(this.check(value)) this.arr[value] = false;
        return;
    }
    check(value){
        if(this.arr[value]) return true;
        return false;
    }
    toggle(value){
        this.arr[value] = !this.check(value);
        return;
    }
    all(){
        this.arr.fill(true);
        return;
    }
    empty(){
        this.arr.fill(false);
        return;
    }
}

const solution = new Solution();

function quesiton(command){
        const cmd = command[0];
        const value = Number(command[1]);
        switch(cmd){
            case 'add':
                solution.add(value)
                break;
            case 'remove':
                solution.remove(value);
                break;
            case 'check':
                console.log(Number(solution.check(value)));
                break;
            case 'toggle':
                solution.toggle(value);
                break;
            case 'all':
                solution.all();
                break;
            case 'empty':
                solution.empty();
                break;
        }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line)=>{
        quesiton(line.split(' '));
}).on('close', ()=>{
    process.exit();
});



