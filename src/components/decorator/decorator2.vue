<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { registerRuntimeCompiler } from 'vue';


interface Notify {
    send(): number;
}

// デコレーションされるベースとなるオブジェクト
class Email implements Notify {
    send(): number{
        return 1;
    }
}

// ベースのオブジェクトをデコレーションしていくオブジェクトの元
class EmailDecorator implements Notify {
    private notify: Notify;
    constructor(notify: Notify) {
        this.notify = notify;
    }

    send(): number{
        return this.notify.send();
    }
}

// 実際にデコレーションするオブジェクト
class Facebook extends EmailDecorator {
    constructor(notify: Notify) {
        super(notify);
    }
    send(): number{
        return super.send() + 1;
    }
}

// 実際にデコレーションするオブジェクト
class Slack extends EmailDecorator {
    constructor(notify: Notify) {
        super(notify);
    }
    send(): number{
        return super.send() + 1;
    }
}

// デコレーションされるベースのオブジェクト
const email = new Email(); 
console.log(email.send()) // 1

 // 2つのデコレーションがベースのオブジェクトをデコレーションしている
const threeNotify = new Slack(new Facebook(new Email()));
console.log(threeNotify.send()) // 3
</script>

<style scoped>

</style>