<template>
    <div>

    </div>
</template>

<script setup lang="ts">

enum ActionType {
    stateName = 'stateName',
    tellYourLover = 'tellYourLiver',
}

interface Observer {
    onNotify(action: ActionType): void
}
interface Observelbe {
    on(...args: Observer[]): void
    off(listener: Observer): void
    notify(action: ActionType): void
}

class Listener implements Observer {
    constructor(private name: string, private hasLover: boolean) { }

    public onNotify(action: ActionType): void {
        switch (action) {
            case ActionType.stateName:
                console.log(this.name);
                break;
            case ActionType.tellYourLover:
                console.log(this.hasLover ? 'I Have Lovers' : 'I don\'t have lovers');
            default:
                break;
        }
    }
}

class Asker implements Observelbe {
    public listeners: Observer[];
    constructor() {
        this.listeners = [];
    }

    on(...args: Observer[]): void {
        this.listeners = this.listeners.concat(args)

    }
    off(listener: Observer): void {
        if (this.listeners.some(listener => { return listener === listener })) {
            this.listeners.splice(this.listeners.indexOf(listener), 1)
        }
    }
    notify(action: ActionType): void {
        this.listeners.forEach(listener => {
            listener.onNotify(action)
        })
    }
    
}


const yamada = new Listener('yamada', false);
const takeda = new Listener('takeda', true);

const shun = new Asker();

shun.on(yamada, takeda)

shun.notify(ActionType.tellYourLover)

</script>

<style scoped>

</style>