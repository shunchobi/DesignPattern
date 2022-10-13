<template>
    <div>

    </div>
</template>

<script setup lang="ts">

interface Printer {
    printInfo(): void;
}

class Human {
    constructor(private name: string, private age: number) {
        this.name = name;
        this.age = age;
    }

    stateName(): string {
        return this.name;
    }

    stateAge(): number {
        return this.age;
    }
}

class HumanPrinter implements Printer {

    constructor(private human: Human) {
        this.human = human;
    }

    printInfo(){
        console.log(`${this.human.stateName()}は、${this.human.stateAge()}歳です。`);
    }
}

const human: Human = new Human('shun', 29);
const humanPrinter: Printer = new HumanPrinter(human);
humanPrinter.printInfo();
</script>

<style scoped>

</style>