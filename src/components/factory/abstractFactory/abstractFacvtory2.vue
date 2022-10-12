<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// product abstract
abstract class CreateProductA {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract create(): string;
}
abstract class SellProductB {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract sell(): string;
}

// product
class ProductA extends CreateProductA {
    constructor(name: string) {
        super(name);
    }
    create(): string {
        return `${this.name} を作ります`;
    }
}

class ProductB extends SellProductB{
    constructor(name: string) {
        super(name);
    }
    sell() {
        return `${this.name}を売ります`
    }
}

// interface for company
interface Company {
    createProductA(name: string): ProductA;
    sellProductB(name: string): ProductB;
}

// abstract factory companies
abstract class CompanyFactory implements Company {
    static createCompany(id: string): Company | undefined {
        if (id === 'campanyA') { return new CompanyA(); }
        if (id === 'campanyB') { return new CompanyB(); }
    }

    abstract createProductA(name: string): ProductA;
    abstract sellProductB(name: string): ProductB;
} 

// company whitch own products
class CompanyA extends CompanyFactory {
    static id: string = 'campanyA';
    createProductA(name: string): ProductA{
        return new ProductA(name);
    }
    sellProductB(name: string): ProductB {
        return new ProductB(name);
    }
}
class CompanyB extends CompanyFactory {
    static id: string = 'campanyB';
    createProductA(name: string): ProductA{
        return new ProductA(name);
    }
    sellProductB(name: string): ProductB {
        return new ProductB(name);
    }
}

const campanyA = CompanyFactory.createCompany(CompanyA.id);
const campanyB = CompanyFactory.createCompany(CompanyB.id);
console.log(campanyA?.createProductA('phone').create());
console.log(campanyA?.sellProductB('phone case').sell());
console.log(campanyB?.createProductA('teable').create());
console.log(campanyB?.sellProductB('chair').sell());


</script>

<style scoped>

</style>