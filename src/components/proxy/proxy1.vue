<template>
    <div>

    </div>
</template>

<script setup lang="ts">

/**
 * 
 * Proxy パターンは、対象のリソースの取得を何度も行いたくなくて
 * 必要な時に一度だけ取得し、そのリソースをキャッシュ（保持）しておき
 * 再度必要な時は、キャッシュしておいたリソースへアクセスする。
 * しかも、アプリ起動時にすべてのリソースを取得せず、それが必要になったタイミングで取得する。
 * 大量のデータを保持するデータベースのデータ取得などのロジックに役立つ
 * 
 * 
 */
interface VideoLib {
    getVideoList(): string[];
    getVideoInfo(id: number): string;
    downloadVideo(): string;
}

class YoutubeResourceManager implements VideoLib {
    getVideoList(): string[] {
        return [
            'A', 'B', 'C', 'D', 'E',
        ]
    }
    getVideoInfo(id: number): string {
        return String(id);
    }
    downloadVideo(): string {
        return 'This is the video'
    }
}

class YoutubeResourceProxy implements VideoLib {
    private youtubeMG: VideoLib;
    private videoList: string[] | undefined;
    private videoInfo: string | undefined;
    private video: string | undefined;

    constructor(youtubeMG: VideoLib) {
        this.youtubeMG = youtubeMG;
    }
    getVideoList(): string[] {
        if (this.videoList) {
            return this.videoList;
        }
        this.videoList = this.youtubeMG.getVideoList(); 
        return this.videoList;
    }
    getVideoInfo(id: number): string {
        if (this.videoInfo) {
            return this.videoInfo;
        }
        this.videoInfo = this.youtubeMG.getVideoInfo(id); 
        return this.videoInfo;
    }
    downloadVideo(): string {
        if (this.video) {
            return this.video;
        }
        this.video = this.youtubeMG.downloadVideo(); 
        return this.video;
    }
}


const youtubeMG = new YoutubeResourceManager();
const youtubeMGProxy = new YoutubeResourceProxy(youtubeMG);
const videoList1 = youtubeMGProxy.getVideoList();
const video1 = youtubeMGProxy.downloadVideo()
const videoLis2 = youtubeMGProxy.getVideoList();
const video2 = youtubeMGProxy.downloadVideo()
console.log(videoList1, videoLis2, ' : ', video1, video2);
console.log(videoList1 === videoList1, video1 === video2)




</script>
