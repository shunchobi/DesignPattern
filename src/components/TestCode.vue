<template>
  <div>

  </div>
</template>

<script setup lang="ts">

interface A {
  a(): void
}

class B implements A {
  a(): void {
    console.log('a')
  }
  b() {
    console.log('b')
  }
}

const test = new B()
test.a()
test.b()
</script>

<style scoped>

</style>