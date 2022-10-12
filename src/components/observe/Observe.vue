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

    
// 監視する人
interface Observer {  
    onNewBook(): void;  // 通知されたら実行する処理
}

// 通知(Subject)する人という意味がしっくりきます。監視対象、インターフェイス名はSubjectでもよい
interface Observable { 
    on(reader: Observer): void;   // 通知対象のオブザーバを追加
    off(reader: Observer): void;  // オブザーバを通知対象から除外
    notify(): void;               // 通知する
}

// 読者
class Reader implements Observer {

    constructor(private name: string) {}

    /*
     * onNewBook というリスナー関数を定義しました。
     * 中身はコンソールにログを出力するだけですが、
     * 新刊発売のイベントが発火したタイミングでこの関数を呼び出します。
     */
    public onNewBook() {
        console.log(`${this.name} : I will go to buy the book to bookstore`);
    }
}

// 出版社
class Publisher implements Observable {

    /**
     * readers というインスタンスプロパティにオブザーバである読者オブジェクトをどんどんぶち込んでいきます。
     * これが on() で行っている処理の実態です。off() はその逆ですね。登録済みのオブザーバを削除します。
     * nofity() で指定された登録されたオブザーバの onNewBook()を呼び出します。
     */
    private readers: Observer[];

    constructor(public name: string) {
        this.readers = [];
    }

    public on(reader: Reader) {
        this.readers.push(reader);
    }

    public off(reader: Reader) {
        this.readers.splice(this.readers.indexOf(reader), 1);
    }

    public notify() {
        this.readers.forEach((reader: Observer) => reader.onNewBook());
    }
}

/**
 * オブザーバに通知
 * 
 * 出版社は読者に対して自分を監視するように頼みます。
 * 出版社は書籍を発売する度に周囲に対して通知します。
 * 特定の誰かに対して、などと意識することなく純粋に通知するだけです。
 * 読者は出版社を監視しているので何かが通知されたらすぐに分かります。
 */
const oreilly = new Publisher('oreilly'); // 観察するもの

const john = new Reader('john'); // 観察されるもの、観察対象者
const paul = new Reader('paul');

// 通知者を追加、Publisherの私を監視してねという意味になる
oreilly.on(john);
oreilly.on(paul);

// 新刊発売の通知発行
oreilly.notify();

</script>

<style scoped>
</style>