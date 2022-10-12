<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface Car {
    state(): string;
}
class CarBase implements Car {
    state(): string {
        return 'base car';
    }
}
class CarDecorator implements Car {
    private car: Car;
    constructor(car: Car) {
        this.car = car;
    }
    state(): string {
        return this.car.state();
    }

}

class SportCar extends CarDecorator {
    constructor(car: Car) {
        super(car)
    }
    state(): string {
        return super.state() + ' gose sport car'
    }
}

class LanxyCar extends CarDecorator {
    constructor(car: Car) {
        super(car);
    }
    state(): string {
        return super.state() + ' goes lanxy car'
    }
}

const basicCar = new CarBase();
console.log(basicCar.state());
const sportCar = new SportCar(new CarBase());
console.log(sportCar.state());
const lanxySportCar = new LanxyCar(new SportCar(new CarBase()));
console.log(lanxySportCar.state());

</script>

<style scoped>

</style>