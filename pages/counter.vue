<script setup lang="ts">
const counter = useCounter()
</script>

<template>
  <div>
    <button @click="counter++">Connt: {{ counter }}</button>
    <nuxt-link to="/">Go to index</nuxt-link>
  </div>
</template>
