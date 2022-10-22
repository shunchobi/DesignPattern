<template>
</template>

<script setup lang="ts">

type state = 'normal' | 'hangry' | 'exited';

interface ChildState {
    playing(): string;
    sitting(): string;
    beHold(): string;
}

class YuriNormal implements ChildState {
    private yuri: Yuri;
    constructor(yuri: Yuri) {
        this.yuri = yuri;
    }
    playing(): string{
        return 'smiling';
    }
    sitting(): string {
        this.yuri.changeState(new YuriHangry(this.yuri));
        return 'sitting calm';
    }
    beHold(): string {
        return 'calm';
    }
}
class YuriHangry implements ChildState {
    private yuri: Yuri;
    constructor(yuri: Yuri) {
        this.yuri = yuri;
    }
    playing(): string{
        this.yuri.changeState(new YuriExited(this.yuri));
        return 'get violence';
    }
    sitting(): string {
        return 'doesn\'t sit';
    }
    beHold(): string {
        return 'calm';
    }
}
class YuriExited implements ChildState {
    private yuri: Yuri;
    constructor(yuri: Yuri) {
        this.yuri = yuri;
    }
    playing(): string{
        return 'shout';
    }
    sitting(): string {
        return 'wanna walk';
    }
    beHold(): string {
        this.yuri.changeState(new YuriNormal(this.yuri));
        return 'wait to play with parents';
    }
}


class Yuri {
    private stateAction: ChildState;
    constructor() {
        this.stateAction = new YuriNormal(this);
    }

    play(): string{
        return this.stateAction.playing();
    }
    sit(): string {
        return this.stateAction.sitting();
    }
    beHold(): string {
        return this.stateAction.beHold();
    }

    changeState(state: ChildState): void {
        this.stateAction = state;
    }

    // getAngry() {
    //     this.stateAction = new YuriHangry(this)
    // }

    // getNormal() {
    //     this.stateAction = new YuriNormal(this);
    // }

    // getExited() {
    //     this.stateAction = new YuriExited(this);
    // }
}

const yuri = new Yuri();
console.log(yuri.play());
console.log(yuri.sit()); 
console.log(yuri.sit());
console.log(yuri.play());
console.log(yuri.play());

</script>
