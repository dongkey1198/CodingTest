const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Queue {
    constructor(){
        this.arr = [];
    }
    enqueue(el) {
        this.arr.push(el);
    }
    dequeue(){
        if(this.arr.length < 1){
            return -1;
        } else {
            return this.arr.shift();
        }
        
    }
    size(){
        return this.arr.length;
    }
    empty(){
        if(this.arr.length > 0){
            return 0;
        } else{
            return 1;
        }
    }
    front(){
        if(this.arr.length < 1){
            return -1;
        } else {
            return this.arr[0];
        }
    }
    back(){
        if(this.arr.length < 1){
            return -1;
        } else {
            return this.arr[this.arr.length-1];
        }
    }
}

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input.shift();
    const queue = new Queue();
    let result = '';
    input.map(el => {
        let cmd = el.split(' ');
        switch(cmd[0]){
            case 'push':
                queue.enqueue(cmd[1]);
                break;
            case 'pop':
                result += `${queue.dequeue()}\n`;
                break;
            case 'size':
                result += `${queue.size()}\n`;
                break;
            case 'empty':
                result += `${queue.empty()}\n`;
                break;
            case 'front':
                result += `${queue.front()}\n`;
                break;
            case 'back':
                result += `${queue.back()}\n`;
        }
    })
    console.log(result);
});