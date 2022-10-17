<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

interface SendLogic {
  send(data: any): string | Error;
}

class Axious implements SendLogic {
  send(data: any): string | Error {
    const config = {
      method: 'post',
      url: 'https://d4efhvv7a6.execute-api.ap-northeast-1.amazonaws.com/prod/post',
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   "Content-type": "application/json",
      // },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        return JSON.stringify(response.data);
      })
      .catch(function (error: Error) {
        return error;
      });

    return new Error('fail post')
  }
}

abstract class Post {
  sendProcess: SendLogic;
  constructor() {
    this.sendProcess = new Axious();
  }
  abstract post(stageNum: number, mode: string, answer: string): string | Error;
}

class PostData extends Post {
  constructor() {
    super();
  }
  post(stageNum: number, mode: string, answer: string): string | Error {
    const stageLabel = mode === 'pazle' ? 'P' : 'C'
    const stageNumLabel = ('000' + stageNum).slice(-3);
    const data = {
      stage_id: stageLabel + stageNumLabel, // P000
      command: answer
    }
    return this.sendProcess.send(data);
  }
}

const postMG = new PostData();
const result = postMG.post(3, 'code', 'right left up');


</script>

<style scoped>

</style>