<template>
    <div>

    </div>
</template>

<script setup lang="ts">

type StateReader = {
    state: string,
    readers: Observer[]
}

interface Observer {
    notify(state: string, ...params: any[]): void
}
interface Observable {
    on(state: string, reader: Observer): void
    off(state: string, reader: Observer): void
    subject(state: string, ...params: any[]): void
}

class Reader implements Observer {
    constructor(private name: string) { }
    public notify(state: string, ...params: any[]): void {
        console.log(`${this.name}: ${state}の通知を受けたので、${params} に対してアクションを起こします。`)
    }
}

class Publisher implements Observable {
    private readers: StateReader[]
    constructor(private name: string) {
        this.readers = []
    }

    public on(state: string, reader: Observer) {
        const targetReader = this.getIsStateExist(state)
        if (targetReader && targetReader.readers) {
            targetReader.readers.push(reader)
        } else {
            this.readers.push({
                state,
                readers: [reader]
            })
        }
    }

    public off(state: string, reader: Observer) {
        const targetReader = this.getIsStateExist(state)
        targetReader && targetReader.readers.splice(targetReader.readers.indexOf(reader), 1)
    }

    public subject(state: string, ...params: any[]): void {
        const targetReader = this.getIsStateExist(state)
        targetReader && targetReader.readers.forEach(reader => {
            reader.notify(state, params)
        });
    }

    private getIsStateExist(state: string): StateReader {
        return this.readers.find(reader => reader.state === state)!
    }
}

const states = {
    buy: 'buy',
    think: 'thik',
}

const john = new Reader('john')
const henlly = new Reader('henlly')
const poal = new Reader('poal')

const company = new Publisher('commicCampany')
company.on(states.buy, john)
company.on(states.buy, henlly)
company.on(states.think, poal)
company.on(states.think, john)

company.subject(states.think, '夜空: 近藤俊一', '月: Yusaku')

company.off(states.think, john)
company.subject(states.think, '夜空: 近藤俊一', '月: Yusaku')


</script>

<style scoped>

</style>