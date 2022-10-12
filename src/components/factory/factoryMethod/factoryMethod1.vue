<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { stringifyStyle } from '@vue/shared';

class Store {
    public order(item: string, country: string): number | undefined {
        let pricePerCost: number | undefined
        let cost: number | undefined
        let price: number | undefined
        cost = this.create(item, country)?.cost();
        switch (country) {
            case "Japan":
                pricePerCost = 1.05
                break
            case "America":
                pricePerCost = 1.02
                break
        }

        if (cost && pricePerCost) {
            price = cost * pricePerCost
        }
        return price
    }

    public create(item: string, country: string): Sandwich | undefined {
        let sand: Sandwich | undefined = undefined;
        switch (country) {
            case 'japan':
                switch (item) {
                    case 'BLE':
                        sand = new JapaneseBLTSand();
                        break;
                    case 'Tuna':
                        sand = new JapaneseTunaSand();
                    default:
                        break;
                }
            case 'Ameraca':
                switch (item) {
                    case 'BLE':
                        sand = new AmericanBLTSand();
                        break;
                    case 'Tuna':
                        sand = new AmericanTunaSand();
                    default:
                        break;
                }
            default:
                break;
        }
        return sand;
    }
}



interface Sandwich {
    cost(): number;
}

class JapaneseTunaSand implements Sandwich {
    bread = new JapaneseBread
    tuna = new JapaneseTuna
    cost(): number {
        let cost = this.tuna.cost + this.bread.cost
        return cost
    }
}
class JapaneseBLTSand implements Sandwich {
    bread = new JapaneseBread
    bacon = new JapaneseBacon
    cost(): number {
        let cost = this.bacon.cost + this.bread.cost
        return cost
    }
}

class AmericanTunaSand implements Sandwich {
    bread = new AmericanBread
    tuna = new AmericanTuna
    cost(): number {
        let cost = this.tuna.cost + this.bread.cost
        return cost
    }
}
class AmericanBLTSand implements Sandwich {
    bread = new AmericanBread
    bacon = new AmericanBacon
    cost(): number {
        let cost = this.bacon.cost + this.bread.cost
        return cost
    }
}

class JapaneseBread {
    cost = 60
}
class AmericanBread {
    cost = 50
}

class JapaneseTuna {
    cost = 70
}
class AmericanTuna {
    cost = 140
}

class JapaneseBacon {
    cost = 200
}
class AmericanBacon {
    cost = 100
}

const cost = {
    Thai: {
        bacon: 70,
        bread: 40,
    }
}


/**
 * 以下の   MyStoreがFactory Methodを実装した構造になる
 * こおすれば、国ごとのサンドイッチ店を簡単に定義、生成できる
 */
////////////////////////////////////////////////////////////////
abstract class MyStore {
    order(item: string): number | undefined {
        let sand = this.create(item);
        let cost = sand?.cost();
        return cost;
    }

    abstract create(item: string): Sandwich | undefined
}

class AmericanSandwich extends MyStore {
    create(item: string): Sandwich | undefined {
        if (item === 'BLT') {
            return new AmericanBLTSand();
        }
        if (item === 'Tuna') {
            return new AmericanTunaSand();
        }
        return undefined;
    }
}

class JapaneseSandwich extends MyStore {
    create(item: string): Sandwich | undefined {
        if (item === 'BLT') {
            return new JapaneseBLTSand();
        }
        if (item === 'Tuna') {
            return new JapaneseTunaSand();
        }
        return undefined;
    }
}

const ameraanSand: MyStore = new AmericanSandwich();
const BLTcost = ameraanSand.order('BLT');
console.log(BLTcost); // 150

////////////////////////////////////////////////////////////////

abstract class SandwitchStore {
    order(name: string): number {
        const sandwitch = this.create(name);
        return sandwitch.cost();
    }

    abstract create(name: string): Sandwich
}

interface Sandwich {
    cost(): number;
}

class ThaiTunaSandwitch implements Sandwich {
    baconCost: number = cost.Thai.bacon;
    breadCost: number = cost.Thai.bread;
    cost(): number{
        return this.baconCost + this.breadCost;
    }
}

class WE_DONT_HAVE_THE_SANDWITCH implements Sandwich {
    cost(): number{
        return 0;
    }
}

class ThaiSandwichStore extends SandwitchStore {
    create(name: string): Sandwich {
        if (name === 'Tuna') {
            return new ThaiTunaSandwitch();
        }
        return new WE_DONT_HAVE_THE_SANDWITCH();
    }
}


const thaiSandwitch = new ThaiSandwichStore();
const thaiTunaCost = thaiSandwitch.order('Tuna');
console.log('ThaiTunaCost: ', thaiTunaCost);

</script>

<style scoped>

</style>