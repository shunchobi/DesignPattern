<template>
    <div>

    </div>
</template>

<script setup lang="ts">
/**
 * Template Pattern
 * ある処理の流れだけをinterfaceで定義し、実際の処理内容は継承したclassで実装していく。
 * こうすれば、同じような処理を行うオブジェクトが複数必要な時、同じinterfaceを実装すればきれいになる。
 * いわゆる、やりたい処理の流れやパターンのテンプレートをひな形で作っておくこと、
 */

interface IDrawble {
    update(): void;
    render(): void;
}

class Character implements IDrawble {
    update(): void {
        console.log('更新されるよ');
    }
    render(): void {
        console.log('描写されるよ');
    }
}

class Cell implements IDrawble {
    update(): void {
        console.log('更新されるよ');
    }
    render(): void {
        console.log('描写されるよ');
    }
}

interface Printer {
    preparePapper(amount: number): void;
    drawSomethig(content: string): void;
    setDataToPrint(): void;
    print(): void;
}

class PrintProcessA implements Printer {
    constructor(private papperAmount: number, private content: string) {
        this.papperAmount = papperAmount;
        this.content = content;
    }
    preparePapper(amount: number): void {
        throw new Error('Method not implemented.');
    }
    drawSomethig(content: string): void {
        throw new Error('Method not implemented.');
    }
    setDataToPrint(): void {
        throw new Error('Method not implemented.');
    }
    print(): void {
        this.preparePapper(this.papperAmount);
        this.drawSomethig(this.content);
        this.setDataToPrint();
    }
}

class PrintProcessB implements Printer {
    constructor(private papperAmount: number, private content: string) {
        this.papperAmount = papperAmount;
        this.content = content;
    }
    preparePapper(amount: number): void {
        throw new Error('Method not implemented.');
    }
    drawSomethig(content: string): void {
        throw new Error('Method not implemented.');
    }
    setDataToPrint(): void {
        throw new Error('Method not implemented.');
    }
    print(): void {
        this.preparePapper(this.papperAmount);
        this.drawSomethig(this.content);
        this.setDataToPrint();
    }
}

</script>

<style scoped>

</style>