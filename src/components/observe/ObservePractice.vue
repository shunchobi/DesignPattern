<template>
    <h1>this is observe practice</h1>
    <h2>{{ playerA.myComment }}</h2>
    <h2>{{ playerB.myComment }}</h2>
    <h2>{{ playerC.myComment }}</h2>

    <button :onclick="subject" style="
        font-size: x-large; 
        background-color: coral; 
        color: black; 
        font-weight: bold;">
        発売を通知する
    </button>

    <div style="margin: 20px;" />

    <button :onclick="releasePlayerB" style="
        font-size: large; 
        background-color: red; 
        color: yellow; 
        font-weight: bold;">
        PlayerBを解除する
    </button>
</template>


<script setup lang="ts">
import { ref } from 'vue';


interface Observer {
    actionOnSubjected(): void
}

interface Observable {
    addObserver(obs: Observer): void
    releaseObserver(obs: Observer): void
    subject(): void
}


class Player implements Observer {

    constructor(private name: string, private comment: string) { }

    public actionOnSubjected = () => {
        this.myComment.value = `${this.name}からのコメント:  ${this.comment}`
    }

    public myComment = ref()
}

class Publisher implements Observable {

    constructor(private name: string) { }

    private observers: Observer[] = []

    public addObserver(obs: Observer) {
        this.observers.push(obs)
    }

    public releaseObserver(obs: Observer) {
        this.observers.splice(this.observers.indexOf(obs), 1)
    }

    public subject() {
        this.observers.forEach((obs) => obs.actionOnSubjected())
    }
}

const playerA = new Player('A', '買うか検討します')
const playerB = new Player('B', '買います！')
const playerC = new Player('C', '息子へのクリスマスプレゼントのために購入します')

const gamePublisher = new Publisher('game publiher')
gamePublisher.addObserver(playerA)
gamePublisher.addObserver(playerB)
gamePublisher.addObserver(playerC)

const subject = () => {
    gamePublisher.subject()
}

const releasePlayerB = () => {
    gamePublisher.releaseObserver(playerB)
}

const obj = [
    'a',
    [
        { c: 'c', d: { X: 'X', z: 'z' } },
        { e: 'e' },
        [
            { f: 'f' }
        ]
    ]
]



console.log('-----------log--------------')

</script>

<style scoped>
</style>