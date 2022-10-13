<template>
    <div>

    </div>
</template>

<script setup lang="ts">

/**
 * ある学校の生徒の数と先生の数、先生一人に対しての生徒の割合を出力したい
 * 学校数は全世界で１００００～以上ある
 * 指定した学校の生徒数を取得できるよう、abstract factory パターンで実装せよ
 * 
 * abstract factory パターン
 * =>
 * 今回の例の場合、ある学校の実体を効率よく工場のようにインスタンス化できるパターン
 */

import { onMounted } from 'vue';

onMounted(() => {
    console.log(amount);
})

type AmountType = {
    studentsAmount: number,
    teacherAmount: number,
    studentsAmountPerOneTeacher: number,
};
type AmountTypeList = keyof AmountType;
type SchoolType = { [schoolName: string]: AmountType };
type CountryType = { [country: string]: SchoolType };

const amount: CountryType = {
    japan: {
        aichikenHeisyu: {
            studentsAmount: 300,
            teacherAmount: 30,
            studentsAmountPerOneTeacher: 0
        }
    },
    London: {
        britishKolonbus: {
            studentsAmount: 1200,
            teacherAmount: 300,
            studentsAmountPerOneTeacher: 0
        }
    },
    Brazil: {
        panam: {
            studentsAmount: 34,
            teacherAmount: 3,
            studentsAmountPerOneTeacher: 0
        }
    }
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

interface School {
    studensAmount(): number;
    teacherAmount(): number;
    studentsAmountPerOneTeacher(): number;
}

// Factory
abstract class SchoolFactory {
    getAmountTypeIs(amountType: AmountTypeList): number {
        return this.createSchool(amountType);
    }
    abstract createSchool(amountType: AmountTypeList): number
}



// 学校の実体
class AichikenHeishu implements School {
    studensAmount(): number {
        const studensAmount = amount.japan.aichikenHeishu.studentsAmount;
        return studensAmount;
    }
    teacherAmount(): number {
        const teacherAmount = amount.japan.aichikenHeishu.teacherAmount;
        return teacherAmount;
    }
    studentsAmountPerOneTeacher(): number {
        return this.studensAmount() / this.teacherAmount();
    }
}

// Factoryパターンで定義された学校の実体を保持するクラス
class AichikenHeishuSchool extends SchoolFactory {
    private school: School;
    constructor() {
        super();
        this.school = new AichikenHeishu();
    }
    createSchool(amountType: AmountTypeList): number {
        switch (amountType) {
            case 'studentsAmount':
                return this.school.studensAmount();
            case 'teacherAmount':
                return this.school.teacherAmount();
            case 'studentsAmountPerOneTeacher':
                return this.school.studentsAmountPerOneTeacher();
            default:
                return 0;
        }
    }
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const aichikenHeishu = new AichikenHeishuSchool();
console.log(aichikenHeishu.getAmountTypeIs('studentsAmount'));
console.log(aichikenHeishu.getAmountTypeIs('teacherAmount'));
console.log(aichikenHeishu.getAmountTypeIs('studentsAmountPerOneTeacher'));

</script>

<style scoped>

</style>