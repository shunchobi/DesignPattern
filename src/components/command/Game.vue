<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useCommandData } from '../../store/commandStore';
import {GameManager} from './GameManager'

const statusData = useCommandData();

console.log(statusData.getGameStatus)
const game = new GameManager();
game.success();

watch(() => statusData.getGameStatus, () => {
    console.log(statusData.getGameStatus);
})

game.fail();

</script>

<style scoped>

</style>