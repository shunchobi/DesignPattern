<template>
</template>

<script setup lang="ts">

/**
 * State is a behavioral design pattern that lets an object alter its behavior 
 * when its internal state changes. It appears as if the object changed its class.
 * 
 * 同じアクションでも状態によって振る舞いが異なるパターンを設計
 * 
 * 複数ある「状態」をクラス単位で管理し、その状態によって振る舞いが異なるクラスの状態が変わったときに、
 * 各状態を表すクラスが振る舞いのアクションを代わりに行う。
 * 例えば、ラジオ。
 * プレイ中、ストップ中、ロック中などの状態があるが、プレイ中にプレイボタンを押されたとき、
 * ストップちゅにプレイボタンが押されたとき、ロック中にプレイボタンが押されたときなどは、
 * すべて振る舞いが異なる。もし「ラジオ」という一つのクラスないで全ての振る舞いを管理し、
 * 状態が変わったらifなどの条件分岐を使って振る舞いを切り替えていたら、可読性は悪いし、
 * 管理がしづらく、ラジオクラスのボリュームがすごいことになる。
 * このような状態が複数あり、切り替わった時のアクションが異なるパターンを設計できるのが
 * Stateパターンになる。
 * 
 * if や switch を使わずに状態によって異なるアクションを切り替えている実装に注目。
 */


// 状態が各自の振る舞いをもっている
interface RadioAction {
    clickPlay(): string;
    clickStop(): string;
}

// プレイ中の振る舞い
class PlayingState implements RadioAction {
    private radio: Radio;
    constructor(radio: Radio) {
        this.radio = radio;
    }
    clickPlay(): string {
        return 'already playing so nothig to do';
    }
    clickStop(): string {
        // play から stop へ状態を変更している
        // 同時に自身の状態アクションを使用しているRadioを渡す
        // バケツリレー方式
        this.radio.changeState(new StopedState(this.radio));
        return 'stop radio'
    }
}

// ストップ中の振る舞い
class StopedState implements RadioAction {
    private radio: Radio;
    constructor(radio: Radio) {
        this.radio = radio;
    }
    clickPlay(): string {
        // stop から play へ状態を変更している 
        // 同時に自身の状態アクションを使用しているRadioを渡す
        // バケツリレー方式
        this.radio.changeState(new PlayingState(this.radio));
        return 'get start to play';
    }
    clickStop(): string {
        return 'already stoped so nothig to do';
    }
}

// ラジオクラス
class Radio {
    private state: RadioAction;
    constructor() {
        // 初期状態の状態を表すアクションクラスを定義
        this.state = new StopedState(this);
    }

    clickPlayBtn(): string {
        return this.state.clickPlay();
    }
    clickStopBtn(): string {
        return this.state.clickStop()
    }
    changeState(state: RadioAction) {
        this.state = state;
    }
}

const radio = new Radio();
console.log(radio.clickStopBtn()); // already stoped so nothig to do
console.log(radio.clickPlayBtn()); // get start to play
console.log(radio.clickPlayBtn()); // already playing so nothig to do
console.log(radio.clickStopBtn()); // stop radio
console.log(radio.clickStopBtn()); // already stoped so nothig to do

</script>
