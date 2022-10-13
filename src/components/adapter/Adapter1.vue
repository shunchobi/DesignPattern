<template>
    <div>

    </div>
</template>

<script setup lang="ts">
/**
 * 

 [Adapter] という英単語は, [適合させるもの] という意味.

互換性のないインタフェースを持つメソッド間の相違を, 埋めるような (適合させる) パターンが,
 [Adapter パターン] である. つまり, [Adapter パターン] は, 
 ある任意の機能のインタフェースを変更することなく,
 他クラスが提供している新しい機能を使用できるようにするパターン.

このパターンには, 以下の２つの実装方法がある:

1. 継承 (is a 関係)
2. 委譲 (has a 関係)

Client (利用者):
[Target] のメソッドを利用して処理を行う.
Target (対象):
要求されているメソッド (インタフェース) を定める.
Adaptee (適合される側):
既存のメソッドを提供する. このメソッドの機能を [Target] のインタフェースに適合させ利用する.
Adapter (適合させる):
[Adaptee] のメソッドのインタフェースを吸収し, [Target] から利用できるインタフェースに変換する.

 実装方法としては, 以下の 2 通りある. 
 1). [Target] が interface で定義されている場合
 : [Adaptee] を継承する方法 
 (1. 継承を利用した方法) で実装する.

2). [Target] が [abstract class] で定義されている場合
: [Adaptee] に委譲する方法 
(2. 委譲を利用した方法) で実装する.
 */



interface Target1 {
    method1(): void;
    method2(): void;
}

class Adaptee {
    adapteeMethod1(): void{
        console.log('adaptee method1');
    }
    adapteeMethod2(): void{
        console.log('adaptee method2');
    }
}

// 継承パターンのAdapter
class Adapter1 extends Adaptee implements Target1 {
    method1() {
        super.adapteeMethod1();
    }
    method2() {
        super.adapteeMethod2();
    }
}

const cliant1 = new Adapter1();
cliant1.method1();
cliant1.method2();



abstract class Target2 {
    abstract method1(): void;
    abstract method2(): void;
}

// 委譲パターンのAdapter
class Adapter2 extends Target2 {
    constructor(private adaptee: Adaptee) {
        super()
        this.adaptee = adaptee;
    }
    method1() {
        this.adaptee.adapteeMethod1();
    }

    method2() {
        this.adaptee.adapteeMethod2();
    }
}

const adaptee = new Adaptee()
const cliant2 = new Adapter2(adaptee); // コンストラクター内でインスタンス化して保持していてもよい
cliant2.method1();
cliant2.method2();

/**
 *　委譲
 */
</script>

<style scoped>

</style>