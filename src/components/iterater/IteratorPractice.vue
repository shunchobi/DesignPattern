<template>
    <div>

    </div>
</template>

<script setup lang="ts">

// コレクションの要素を返す
interface Iterator<T> {
    startIterate(): T;
    customIterator(any: any): any;
    valid(): boolean;
}
// コレクションの状態管理
interface Aggregate {
    getIterator(): Iterator<Age>;
}

class MyTextIterator implements Iterator<Age>{
    private items: MyTextAggregate;
    private position: number = 0;

    constructor(items: MyTextAggregate) {
        this.items = items;
    }
    startIterate(): Age {
        const item = this.items.getItem()[this.position];
        this.position += 1;
        return item;
    }
    customIterator(fun: Function): Age | null {
        const item = this.items.getItem()[this.position];
        this.position += 1;
        if (fun && fun(item)) { return item; }
        else { return null }
    }
    valid(): boolean {
        return this.position < this.items.getCount();
    }

}

type Age = { name: string, birth: number };

class MyTextAggregate implements Aggregate {
    private items: Age[] = [];

    public getIterator(): Iterator<Age> {
        return new MyTextIterator(this);
    }
    public getItem(): Age[] {
        return this.items;
    }
    public getCount(): number {
        return this.items.length;
    }
    public addItem(item: Age): void {
        this.items.push(item);
    }
}


const myAggregate = new MyTextAggregate();
const myIterator = myAggregate.getIterator();

myAggregate.addItem({name: 'shun', birth: 1993});
myAggregate.addItem({name: 'sakura', birth: 1997});
myAggregate.addItem({name: 'yuri', birth: 2020});
myAggregate.addItem({name: 'yusaku', birth: 2022});

while (myIterator.valid()) {
    // コレクションを0indexから順番に処理できる。
    console.log(myIterator.customIterator(
        (age: Age): boolean =>
        {
        if (age.birth < 2000) { return true }
            else { return false }
        }
    ));
}

</script>

<style scoped>

</style>