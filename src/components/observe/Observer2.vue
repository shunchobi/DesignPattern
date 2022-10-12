<template>
    <h3></h3>
</template>

<script setup lang="ts">

/**
 * Observer パターンといいます。
 * 特徴は出版社は新刊を発売したらそのことを不特定多数に通知するだけで役目を終えます。
 * 出版社から購入してくださいと直接呼び出される ( 依存する ) こともありません。
 * 出版社というクラスが読者というクラスが持つ購入するという処理を直接呼び出さなくてよくなります。
*/

type Listener = {
    state: string;
    readers: Observer[];
}

// 監視する人
interface Observer {
    onNewBook(): void;  // 通知されたら実行する処理
}

interface Observable {
    on(state: string, reader: Observer): void;
    off(state: string, reader: Observer): void;
    notify(state: string): void;
}

// 読者
class Reader implements Observer {

    constructor(private name: string) { }

    /*
     * onNewBook というリスナー関数を定義しました。
     * 中身はコンソールにログを出力するだけですが、
     * 新刊発売のイベントが発火したタイミングでこの関数を呼び出します。
     */
    public onNewBook() {
        console.log(`${this.name} : I will go to buy the book to bookstore`);
    }
}

class Publisher implements Observable {

    private listeners: Listener[];

    constructor(public name: string) {
        this.listeners = [];
    }

    public on(state: string, reader: Reader) {
        const listener = this.getListener(state);
        if (listener && listener.readers) {
            listener.readers.push(reader);
        } else {
            this.listeners.push({
                state,
                readers: [reader]
            });
        }
    }

    public off(state: string, reader: Reader) {
        const listener = this.getListener(state);
        listener && listener.readers.splice(listener.readers.indexOf(reader), 1);
    }

    public notify(state: string) {
        const listener = this.getListener(state);
        listener && listener.readers.forEach((reader: Observer) => reader.onNewBook());
    }

    private getListener(state: string): Listener {
        return this.listeners.find((listener) => listener.state === state)!;
    }
}

const oreilly = new Publisher('oreilly');

const john = new Reader('john');
const paul = new Reader('paul');
const wakamsha = new Reader('wakamsha');

oreilly.on('release', john);
oreilly.on('release', paul);
oreilly.on('sale', wakamsha);

oreilly.notify('release');

console.log('-------- 中略 --------');

oreilly.off('release', john);
oreilly.notify('release');
</script>

<style scoped>

</style>