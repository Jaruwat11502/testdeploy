<script setup lang="ts">
const counter = useCounter()
</script>

<template>
  <h1>Index (Counter: {{ counter }})</h1>
  <nuxt-link to="/counter">Go to /counter</nuxt-link>
</template>
