<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useCommandData } from '../../store/commandStore';
import {GameManager} from './GameManager'

const statusData = useCommandData();

watch(() => statusData.getGameStatus, () => {
    console.log(statusData.getGameStatus);
})


class Game {
    public gameClearHook: () => void;

    public constructor() {
        this.gameClearHook = () => { };
    }

    public trigger() {
        this.gameClearHook();
    }
}

const game = new Game();
game.gameClearHook = () => {
    console.log("hoge");
}
game.trigger();


</script>

<style scoped>

</style>