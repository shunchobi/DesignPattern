<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    /**
     　 このファイルに書かれているのは、日本とアメリカでサンドイッチをオーダーしたときの様子
     　 注文した商品の売値を計算するプログラムを作る
        サンドイッチごとに具材が異なる
        国ごとに具材の仕入れ値が異なる
        値段を決めるロジックは

        売値=(具材の仕入れ値の合計)×(各国ごとの倍率)
        で決まるとします。
        簡単のためアメリカ支店と日本支店しかなく、サンドイッチもツナサンドとBLTしかないとします。


        このふぁいるではFactoryめどっどを説明するためのコードモデルだけを書いておく。
        factoryMethod1.vueでここのコードをfactoryMethod化していく
     * 
     */
class Store{
    public order(item:string, country:string):number|undefined{
        let pricePerCost:number|undefined
        let cost:number|undefined
        let price:number|undefined
        switch(country){
            case "Japan":
                pricePerCost = 1.05
                switch(item){
                    case "BLT":{
                        cost = (new JapaneseBLTSand).cost()
                    }
                    case "Tuna":{
                        cost = (new JapaneseTunaSand).cost()
                    }
                }
            case "America":
                pricePerCost = 1.02
                switch(item){
                    case "BLT":{
                        cost = (new AmericanBLTSand).cost()
                    }
                    case "Tuna":{
                        cost = (new AmericanTunaSand).cost()
                    }
                }
        }
        if(cost && pricePerCost){
            price = cost * pricePerCost
        }
        return price
    }
}

class JapaneseTunaSand{
    bread = new JapaneseBread
    tuna  = new JapaneseTuna
    cost():number{
        let cost = this.tuna.cost + this.bread.cost
        return cost 
    }
}
class JapaneseBLTSand{
    bread = new JapaneseBread
    bacon  = new JapaneseBacon
    cost():number{
        let cost = this.bacon.cost + this.bread.cost
        return cost 
    }
}

class AmericanTunaSand{
    bread = new AmericanBread
    tuna  = new AmericanTuna
    cost():number{
        let cost = this.tuna.cost + this.bread.cost
        return cost 
    }
}
class AmericanBLTSand{
    bread = new AmericanBread
    bacon  = new AmericanBacon
    cost():number{
        let cost = this.bacon.cost + this.bread.cost
        return cost 
    }
}

class JapaneseBread{
 cost = 60
}
class AmericanBread{
 cost = 50
}

class JapaneseTuna{
    cost = 70
}
class AmericanTuna{
    cost = 140
}

class JapaneseBacon{
    cost = 200
}
class AmericanBacon{
    cost = 100
}

let store = new Store
let cost = store.order("BLT","Japan")
console.log(cost) // 193.8
</script>

<style scoped>

</style>