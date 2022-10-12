<template>
    <div>

    </div>
</template>

<script setup lang="ts">

type Listener = {
    state: string;
    reader: Observer[]
}

interface Observer {
    onNotified(): void
}
interface Observable {
    on(state: string, reader: Observer): void
    off(state: string, reader: Observer): void
    notify(state: string): void
}

class Reader implements Observer {
    constructor(private name: string) {}
    public onNotified() {
        console.log(`${this.name}: 通知を受けました。`)
    }
}

class Publisher implements Observable {

    private listeners: Listener[]
    constructor(private name: string) { 
        this.listeners = []
    }
    public on(state: string, reader: Observer) {
        const listener = this.getLisner(state)
        if (listener && listener.reader) {
            listener.reader.push(reader)
        } else {
            this.listeners.push({
                state,
                reader: [reader]
            })
        }
    }
    public off(state: string, reader: Observer) {
        const listener = this.getLisner(state)
        if (listener && listener.reader) {
            const readerIndex = listener.reader.indexOf(reader)
            listener.reader.splice(readerIndex, 1)
        }
    }
    public notify(state: string) {
        const targetLisner = this.getLisner(state)
        targetLisner && targetLisner.reader.forEach(reader => 
            reader.onNotified()
        )
    }
    private getLisner(state: string): Listener {
        return this.listeners.find(listener => 
             listener.state === state
        )!
    }
}

const states = {
    release: 'release',
    buy: 'buy'
}

const john = new Reader('john')
const poal = new Reader('poal')
const henly = new Reader('henly')

const commicCompany = new Publisher('next')
commicCompany.on(states.release, john)
commicCompany.on(states.release, poal)
commicCompany.on(states.buy, henly)

commicCompany.notify(states.buy)

</script>

<style scoped>

</style>base