<template>
    <div>

    </div>
</template>

<script setup lang="ts">

// 再帰処理を利用し、自前でflat関数を再現

const koko = (element: any): any => {
    if (Array.isArray(element)) {
        const _koko = element.map(el => {
            return koko(el)
        })
        return _koko
    }
    else {
        return element
    }
}

const flat = (array: any[]): any[] => {
    const result = array.map(element => {
        return koko(element)
    });
    return result
}



const array = [[1, [2, 3, [4, 5, [6, 7]]]]]

console.log('flat:' + flat(array))
</script>

<style scoped>

</style>