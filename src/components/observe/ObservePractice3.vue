<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface Display {
    update(): void;
}
interface Sensor {
    addObs(obs: Display): void;
    notify(): void;
    getTemp(): number;
}

class Phone implements Display {
    private temp: number = 0;
    constructor(private name: string, private sensor: Sensor) {
        this.name = name;
        this.sensor = sensor;
    }
    update() {
        this.temp = this.sensor.getTemp();
        console.log(`
        ${this.name}　通知を受けました。
        現在の気温は、${this.sensor.getTemp()}です。
        `);
    }
}
class TempSensor implements Sensor {
    private diplaies: Display[] = [];
    private tem: number = 21;

    addObs(obs: Display): void {
        this.diplaies.push(obs);
    }
    notify(): void {
        this.diplaies.forEach(dis => {
            dis.update();
        });
    }
    getTemp(): number {
        return this.tem;
    }
    recordTemp(newTemp: number) {
        this.tem = newTemp;
    }
}

const tempCenter = new TempSensor();
const phoneA = new Phone('iPhone', tempCenter);
const phoneB = new Phone('Android', tempCenter);

tempCenter.addObs(phoneA);
tempCenter.addObs(phoneB);

tempCenter.recordTemp(19);
tempCenter.notify();
tempCenter.recordTemp(24);
tempCenter.notify();
tempCenter.recordTemp(35);
tempCenter.notify();



</script>

<style scoped>

</style>