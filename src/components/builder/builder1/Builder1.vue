<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ProductBuilder } from './ProductBuilder';


const productBuilder = new ProductBuilder();
const teriyakiSet = productBuilder.makeTeriyakiBuggerSet();
const cheeseSet = productBuilder.makeCheesebugerSet();

console.log(teriyakiSet.getName());
console.log(teriyakiSet.displyItems());
console.log(teriyakiSet.getPrice());
console.log('--------------------------');
console.log(cheeseSet.getName());
console.log(cheeseSet.displyItems());
console.log(cheeseSet.getPrice());


</script>

<style scoped>

</style>