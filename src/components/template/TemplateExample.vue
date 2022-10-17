<template>
    <div>

    </div>
</template>

<script setup lang="ts">
/**
 * Template Pattern
 * アルゴリズムのひな形を定義し、同じアルゴリズムの流れを持つオブジェクトをまとめる。
 * abstractでひな形（Template）を定義し、拡張していく。
 */

 // アルゴリズムのひな形
abstract class Printer {
    constructor(private papperAmount: number, private content: string) {
        this.papperAmount = papperAmount;
        this.content = content;
    }
    print(): void {
        this.preparePapper(this.papperAmount);
        this.drawSomethig(this.content);
        this.setDataToPrint();
    }
    abstract preparePapper(amount: number): void;
    abstract drawSomethig(content: string): void;
    abstract setDataToPrint(): void;
}

// 同じアルゴリズムをもつが、各セクションでの処理が違うPinter1
class PrintProcessA extends Printer {
    
    preparePapper(amount: number): void {
        throw new Error('Method not implemented.');
    }
    drawSomethig(content: string): void {
        throw new Error('Method not implemented.');
    }
    setDataToPrint(): void {
        throw new Error('Method not implemented.');
    }
}

// 同じアルゴリズムをもつが、各セクションでの処理が違うPinter2
class PrintProcessB extends Printer {
    preparePapper(amount: number): void {
        throw new Error('Method not implemented.');
    }
    drawSomethig(content: string): void {
        throw new Error('Method not implemented.');
    }
    setDataToPrint(): void {
        throw new Error('Method not implemented.');
    }
}

</script>

<style scoped>

</style>