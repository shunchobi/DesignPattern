<template>
    <div>

    </div>
</template>

<script setup lang="ts">

/**
 * 「Composite（コンポジット）」パターンは、「木構造（Tree Structure）」を持つデータに
 * 「再帰的な処理」を行うことができるデザインパターンです。
 *  世の中に「木構造」を持つ事例はたくさん見つかりますが、今回は「会社」をテーマに
 * 「Composite（コンポジット）」パターンについて説明をしていきたいと思います。
 * 
 * クラスの関係構造のイメージ画像はこのURLにあります、
 * https://www.pgls-kl.com/article/article_81.html
 */

interface Component {
    getName(): string;
    getSales(): number;
}

// 会社
class Company implements Component {
    private name: string;
    private posts: Component[];
    constructor(name: string) {
        this.name = name;
        this.posts = [];
    }
    addChild(child: Component) {
        this.posts.push(child);
    }
    getName(): string{
        return this.name;
    }
    // ここで自身が所有する部署の総売り上げと
    // 所有する会社のgetSalesを呼んでその部署の総売り上げもよんでいる
    // 再帰的に。
    getSales(): number{
        let allSales = 0;
        this.posts.forEach(post => {
            allSales += post.getSales();
        });
        return allSales;
    }
}

// 部署
class Post implements Component{
    private sale: number;
    private name: string;
    constructor(name: string, sale: number) {
        this.name = name;
        this.sale = sale;
    }
    // ここで実際の売り上げを返している
    getName(): string{
        return this.name;
    }
    getSales(): number{
        return this.sale;
    }
}

const root = new Company('Root');
const child1 = new Company('child1');
const child2 = new Company('child2');

const post1 = new Post('post1', 340000);
const post2 = new Post('post2', 1200000);
const post3 = new Post('post3', 897000);
const post4 = new Post('post4', 90333);
const post5 = new Post('post5', 230000);
const post6 = new Post('post6', 10000000);

// 一番トップの親会社に子会社と部署を追加
root.addChild(child1);
root.addChild(child2);
root.addChild(post6);

// 各子会社に部署を追加
child1.addChild(post4);
child1.addChild(post1);
child2.addChild(post2);
child2.addChild(post5);
child2.addChild(post3);

// .getSales()をすれば自身が所有している全会社の全部署の総売り上げを取得できる。
// rootでgetすればここに定義されているすべての部署
// child1会社でgetすればchild1が所有する全部署のみ
// を再帰的に参照して売り上げを取得する

// 会社という枠組みとその中身を同一のinterfaceを実装することによって実現している
console.log('root sales', root.getSales()); // 12757333
console.log('child1 sales', child1.getSales()); // 430333
console.log('child2 sales', child2.getSales()); // 2327000

// 他にcompositeパターンの説明によく出てくるたとえとして、ディレクトリーとファイルの
// 関係性を表現しているものがあり、これはrootからみて自身のこのファイルもディレクトリーも
// 同じ振る舞いでremoveしたい時など、compositeパターンで実装できる、
// ただinterface{ remove(): void }として実装しrootで実行すればよい。

</script>

<style scoped>

</style>