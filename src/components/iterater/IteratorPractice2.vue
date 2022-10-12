<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface Iterator<T> {
    startIterate(): T;
    valid(): boolean;
}
interface Aggregate {
    getIterator(): Iterator<string>;
}

class MyIterator implements Iterator<string> {
    private items: MyAggregate;
    private position: number = 0;
    constructor(items: MyAggregate, private reverse = false) {
        this.items = items;
        this.reverse = reverse;
        if (this.reverse) {
            this.position = this.items.getCount() - 1;
            console.log('count', this.items.getCount());
        }
    }
    startIterate(): string {
        const item = this.items.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
    valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.items.getCount();
    }
}

class MyAggregate implements Aggregate {
    private items: string[] = [];
    getIterator(): Iterator<string> {
        return new MyIterator(this);
    }
    getReverseIterator(): Iterator<string> {
        return new MyIterator(this, true);
    }
    getItems(): string[] {
        return this.items;
    }
    getCount(): number {
        return this.items.length;
    }
    addItem(item: string) {
        this.items.push(item);
    }
}

const aggregate = new MyAggregate();
aggregate.addItem('hey');
aggregate.addItem('yo');
aggregate.addItem('wht');
const iterator = aggregate.getIterator();
while (iterator.valid()) {
    console.log(iterator.startIterate());
}
console.log(`

`)
const reverse = aggregate.getReverseIterator();
while (reverse.valid()) {
    console.log(reverse.startIterate());
}

///////////////////////////
////////////////////////////
///////////////////////////
console.log(`


`);

interface Iterator2<T> {
    getItem(): T;
    valid(): boolean;
}
interface Aggregate2 {
    getIterator(): Iterator2<string>;
    addItem(item: string): void;
    getLength(): number;
    getItems(): string[];
}

class MyIterator2 implements Iterator2<string>{
    private position: number = 0;
    private myAggregate2: MyAggregate2;
    constructor(myAggregate2: MyAggregate2, private reverseIterate = false) {
        this.myAggregate2 = myAggregate2;
        if (this.reverseIterate) {
            this.position = this.myAggregate2.getLength() - 1;
        }
    }
    getItem(): string {
        const targetItem = this.myAggregate2.getItems()[this.position];
        this.position += this.reverseIterate ? -1 : 1; 
        return targetItem;
    }
    valid(): boolean {
        if (this.reverseIterate) {
            return this.position >= 0;
        }
        return this.position < this.myAggregate2.getLength();
    }

}
class MyAggregate2 implements Aggregate2 {
    private items: string[] = [];
    getIterator(): Iterator2<string> {
        return new MyIterator2(this);
    }
    getReverseIterator(): Iterator2<string>{
        return new MyIterator2(this, true);
    }
    getItems(): string[] {
        return this.items;
    }
    addItem(item: string): void {
        this.items.push(item);
    }
    getLength(): number{
        return this.items.length;
    }
}

const myAggregate2 = new MyAggregate2();
myAggregate2.addItem('sato');
myAggregate2.addItem('shinkai');
myAggregate2.addItem('tamanegi');
const myIterator2: Iterator2<string> = myAggregate2.getIterator();

while (myIterator2.valid()) {
    console.log(myIterator2.getItem());
}

console.log(`

`);

const myReverseIterator2: Iterator2<string> = myAggregate2.getReverseIterator();
while (myReverseIterator2.valid()) {
    console.log(myReverseIterator2.getItem());
}
</script>

<style scoped>

</style>