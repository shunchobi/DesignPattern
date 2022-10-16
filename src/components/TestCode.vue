<template>
  <div>

  </div>
</template>

<script setup lang="ts">

interface Answer {
  readonly stageNum: number;
  answerPazle(): string;
  answerCode(): string;
}

class Stage1 implements Answer {
  readonly stageNum: number = 1;
  answerPazle(): string {
    return 'loop up right loop';
  }
  answerCode(): string {
    return '[ up right ]';
  }
}

class Stage2 implements Answer {
  readonly stageNum: number = 2;
  answerPazle(): string {
    return 'loop up right right loop';
  }
  answerCode(): string {
    return '[ up right right] x 3';
  }
}


class Answers {
  private answers: Answer[] = [];
  constructor() {
    this.answers.push(
      new Stage1(),
      new Stage2(),
    );
  }

  getAnswer(stageNum: number, mode: string): string | undefined{
    if (mode === 'pazle') {
      return this.findAnswer(stageNum)?.answerPazle();
    }
    if (mode === 'code') {
      return this.findAnswer(stageNum)?.answerCode();
    }
    return undefined;
  }

  private findAnswer(stageNum: number): Answer | undefined{
    return this.answers.find(answer => answer.stageNum === stageNum);
  }
}


const answers = new Answers();
console.log(answers.getAnswer(1, 'code'));
console.log(answers.getAnswer(4, 'code'));

</script>

<style scoped>

</style>