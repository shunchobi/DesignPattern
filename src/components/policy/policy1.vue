<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { createFunctionExpression, registerRuntimeHelpers } from '@vue/compiler-core';


type Customor = {cost: number, offenMonth: number}
const customor: Customor = {
    cost: 100001,
    offenMonth: 11,
}
type CustomorRuleType = keyof typeof customor;

interface ExellentCustomorRule {
    rule(customor: Customor): boolean;
}

interface CustomorRule {
    rules:  Map<CustomorRuleType, ExellentCustomorRule>;
    completeRule(customor: Customor): boolean;
}

class GoldCostRule implements ExellentCustomorRule {
    rule(customor: Customor): boolean {
        return customor.cost >= 100000;
    }
}

class GoldOffenMonthRule implements ExellentCustomorRule {
    rule(customor: Customor): boolean {
        return customor.offenMonth >= 10;
    }
}

class SilverCostRule implements ExellentCustomorRule {
    rule(customor: Customor): boolean {
        return customor.cost >= 50000;
    }
}

class SilverOffenMonth implements ExellentCustomorRule {
    rule(customor: Customor): boolean {
        return customor.offenMonth >= 5;
    }
}

class GoldCustomorRule implements CustomorRule {
    readonly rules: Map<CustomorRuleType, ExellentCustomorRule>;
    constructor() {
        this.rules = new Map([
            ['cost', new GoldCostRule()],
            ['offenMonth', new GoldOffenMonthRule()]
        ]);
    }

    completeRule(customor: Customor): boolean {
        return this.rules.get('cost')!.rule(customor) && this.rules.get('offenMonth')!.rule(customor);
    }
}

class SilverCustomorRule implements CustomorRule {
    rules: Map<CustomorRuleType, ExellentCustomorRule>;
    constructor() {
        this.rules = new Map([
            ['cost', new SilverCostRule()],
            ['offenMonth', new SilverOffenMonth()]
        ]);
    }

    completeRule(customor: Customor): boolean {
        return this.rules.get('cost')!.rule(customor) && this.rules.get('offenMonth')!.rule(customor);
    }
}

const canBeUpgradeToGold = (customor: Customor) => {
    const goldRule = new GoldCustomorRule();
    return goldRule.completeRule(customor);
}
console.log(canBeUpgradeToGold(customor));

</script>

<style scoped>

</style>