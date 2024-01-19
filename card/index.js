class data {
    constructor(init) {
        this.init = init;
    }
    increment() {
        return this.init+=1
    }
    reset() {
        return this.init-=1
    }
    decrement() {
        return this.init-=1
    }
}
const s1 = new data(2);
s1.increment();
s1.reset();
s1.decrement();