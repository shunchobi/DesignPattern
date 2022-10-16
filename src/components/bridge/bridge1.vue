<template>
    <div>

    </div>
</template>

<script setup lang="ts">

/**
 * Bridgeパターンとは、「Bridge」すなわち「橋」の役割を果たすパターンです。
 * Bridgeパターンを利用することで、機能と実装を分離して、それぞれを独立に拡張することができるようになります。
 * 
 * 下記の例ではDishware本体とWood, Plasticの機能が各２つだけなので、それぞれの組み合わせのクラス
 * を実装する場合はBridgeパターンを使わなければ４つだけでよい。
 * (WoodPlate, PlasticPlate, WoodBowl, PlasticBowl)
 * が、もしそれぞれが１０個ずつあった場合、それぞれの組み合わせをクラスとして定義しオブジェクト利用
 * しようもんなら大変なことになる、１００個の」クラスを定義しなければいけないため。
 * 
 * これを解決してくれるのが下記で書いているBridgeパターンになる。
 */

// 機能を実装する本体
abstract class Dishware {
    private wood: Material;
    private plastic: Material;
    constructor() {
        this.wood = new Wood();
        this.plastic = new Plastic();
    }

    public addWood(): string{
        return this.wood.material();
    }
    public addPlastic(): string{
        return this.plastic.material();
    }
    abstract shape(): string;
}

class Plate extends Dishware {
    constructor() {
        super();
    }
    shape(): string {
        return 'plate';
    }
}

class Bowl extends Dishware {
    constructor() {
        super();
    }
    shape(): string {
        return 'bowl';
    }
}

// 実装される機能
interface Material {
    material(): string;
}

class Wood implements Material {
    material(): string {
        return 'wood';
    }
}

class Plastic implements Material {
    material(): string {
        return 'plastic';
    }
}


// 各本体２つが機能をそれぞれ保持しているから、本体を定義すれさえすれば機能は使える
const bowl = new Bowl();
const plate = new Plate();

console.log(bowl.shape(), bowl.addWood())
console.log(bowl.shape(), bowl.addPlastic())
console.log(plate.shape(), plate.addWood())
console.log(plate.shape(), plate.addPlastic())



</script>

<style scoped>

</style>