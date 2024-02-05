class q{
    constructor(){
        this.que = []
        this.head = 0
        this.tail = this.que.length;
        this.size = 5
    }
    headq(){
        console.log(this.que[this.head]);
    }
    tailq(){
        console.log(this.que[this.que.length-1]);
    }
    add(val){
        if(this.que.length<this.size){
            this.que.push(val)
        }else{
            console.log('que is full');
        }
    }
    remove(){
        if(this.que.length>1){
            this.que.shift();
        }else{
            console.log('minimum size reached');
        }
    }
    print(){
        console.log(this.que);
    }
    isEmpty(){
        if(this.que.length===0){
            console.log('que is Empty');
        }
    }
}

const que = new q();
que.add(5);
que.add(6);
que.add(6);
que.add(10);
que.headq();
que.tailq();
// que.remove();
que.isEmpty();
que.print();