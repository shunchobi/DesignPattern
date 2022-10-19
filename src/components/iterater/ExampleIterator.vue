<template>
    <div>

    </div>
</template>

<script setup lang="ts">
/**
 * このパターンの恩恵を受けるのは、配列を使うときよりもむしろ、
 * 集合体を扱うクラスを、自分で作ったときです。
 * 自分で作成した集合体クラスにアクセスさせる場合に、
 * それぞれ操作を提供すると思います。が、
 * 普通は提供する手段や方法はばらばらになってしまうのが常です。
 * そんな時、このパターンを使うと、いろいろな集合体クラスに、
 * 順序良くアクセスさせる手段を統一的な方法で提供できます。
 * 
 * Iterator は、 振る舞いに関するデザインパターンの一つで、 
 * 複雑なデータ構造の内部の詳細を公開することなく、 順次横断的に探索することを可能とします。
 * 
 * 
 * Iterator役を生成することで利用側はConcreteAggregate(オブジェクトの集合体を扱うクラス)の
 * 実装を意識せず要素にアクセスできる
 * ループでオブジェクトの集合体を扱うクラスのメソッドは呼ばれていないので依存関係がない
*/

/**
 * 保持している要素を返す
 */
interface Iterator<T> {
    getCurrent(): T;
    startIterate(): T;
    getcurrentKey(): number;
    valid(): boolean;
    rewind(): void;
}
/**
 * コレクションの状態を管理する
 */
interface Aggregator {
    getIterator(): Iterator<string>;
}



//保持している要素を返す
class AlfabeticalOrderIterator implements Iterator<string>{
    private collection: WordsCollection;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    public getCurrent(): string {
        return this.collection.getItem()[this.position]
    }
    public startIterate(): string {
        const item = this.collection.getItem()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
    public getcurrentKey(): number {
        return this.position;
    }
    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    }
    public rewind() {
        return this.position = this.reverse ? this.collection.getCount() -1 : 0;
    }

}


// コレクションの状態を管理する
class WordsCollection implements Aggregator {
    private item: string[] = [];

    public getItem(): string[] {
        return this.item;
    }

    public getCount(): number {
        return this.item.length;
    }

    public addItem(item: string): void {
        this.item.push(item);
    }

    public getIterator(): Iterator<string>{
        return new AlfabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlfabeticalOrderIterator(this, true);
    }

}


const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.startIterate());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.startIterate());
}

console.log(`

`)

const codeLangCollection = new WordsCollection();
codeLangCollection.addItem('TypeScript');
codeLangCollection.addItem('HTML');
codeLangCollection.addItem('css');
codeLangCollection.addItem('swift');
codeLangCollection.addItem('JavaScript');

const langIterator = codeLangCollection.getIterator();
while (langIterator.valid()) {
    console.log(langIterator.startIterate());
}
console.log(`
`)
const langReverceIterator = codeLangCollection.getReverseIterator();
while (langReverceIterator.valid()) {
    console.log(langReverceIterator.startIterate());
}

</script>

<style scoped>

</style>