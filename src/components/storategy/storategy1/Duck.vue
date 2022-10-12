<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


interface Fly {
    fly(): void;
}

interface Eat {
    eat(): void;
}



class FlyHigh implements Fly{
    fly() {
        console.log('fly hight');
    }
}

class FlyLow implements Fly {
    fly(): void {
        console.log('fly low');
    }
}

class EatBugs implements Eat {
    eat() {
        console.log('eat bugs');
    }
}

class EatSnack implements Eat {
    eat(): void {
        console.log('eat snack');
    }
}

interface Duck {
    flyAction: Fly;
    eatAction: Eat;
}

class MyDuck implements Duck {
    flyAction: Fly;
    eatAction: Eat;

    constructor(fly: Fly, eat: Eat) {
        this.flyAction = fly;
        this.eatAction = eat;
    }
}

const main = () => {
    const heightBugs = new MyDuck(new FlyHigh(), new EatBugs());
    heightBugs.flyAction.fly();
    heightBugs.eatAction.eat();
}

onMounted(() => {
    main();
});

</script>

<style scoped>

</style>

