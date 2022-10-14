import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { StatusType } from "../components/command/ResultActions";

export const useCommandData = defineStore('commandData', () => {

    const presentGameStatus = ref<StatusType>('notPlaying');
    const setGameStatus = (result: StatusType) => {
        presentGameStatus.value = result;
    }
    const getGameStatus = computed(() => {
        return presentGameStatus.value;
    })

    return {
        setGameStatus,
        getGameStatus
    }
});