<template>
    <div>

    </div>
</template>

<script setup lang="ts">

/**
 * 
 * Commandパターンはオブジェクトに対する処理のリクエストをコマンドとしてカプセル化するデザインパターン
 * 
 * 実行したいコマンドを持つクラスをインスタンス化して直接メソッドを呼ぶのではなく、
 * 各コマンドをinterfaceで共通化し、その各コマンドのインスタンスを保持する
 * コマンドコントローラークラスを定義し、そこからコマンドを実行する。
 * こおすれば、クライアント側にはコマンドを実行することのみに関心を持たせ、
 * 実際コマンドがどう実行されるかはクライアントは知らなくてもよくなる。
 * それぞれのコマンドクラスで前回実行したコマンドの処理を戻したり（undo）、実行されたことの
 * 通知などの処理も各コマンドクラス内に閉じ込めるので、コードの見通しもよくなり、
 * 管理しやすく柔軟な構造を設計をできる。
 *  */ 

interface RemoteControllerAction {
    execute(): void;
    unexecute(): void;
}

class TurnOn implements RemoteControllerAction {
    execute() {
        console.log('Turn on');
    }

    unexecute() {
        console.log('Turn off');
    }
}

class TurnOff implements RemoteControllerAction {
    execute(): void {
        console.log('Turn off');
    }
    unexecute(): void {
        console.log('Turn on');
    }
}

class DownLight implements RemoteControllerAction {
    execute(): void {
        console.log('down light');
    }
    unexecute(): void {
        console.log('up light');
    }
}

class UpLight implements RemoteControllerAction {
    execute(): void {
        console.log('Turn on');
    }
    unexecute(): void {
        console.log('Turn on');
    }
}

class CommandExecuter {
    private turnOnCommand: RemoteControllerAction;
    private turnOffCommand: RemoteControllerAction;
    private upLightCommand: RemoteControllerAction;
    private downLightCommand: RemoteControllerAction;

    constructor(
        turnOnCommand: RemoteControllerAction,
        turnOffCommand: RemoteControllerAction,
        upLightCommand: RemoteControllerAction,
        downLightCommand: RemoteControllerAction
    ) {
        this.downLightCommand = downLightCommand;
        this.upLightCommand = upLightCommand;
        this.turnOffCommand = turnOffCommand;
        this.turnOnCommand = turnOnCommand;
    }

    turnOn() {
        this.turnOnCommand.execute();
    }
    /// ....
    /// ....
}

const lightController = new CommandExecuter(new TurnOn(), new TurnOff(), new UpLight(), new DownLight());
lightController.turnOn();
</script>

<style scoped>

</style>