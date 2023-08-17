<script setup lang="ts">
const list = ['a','b','c']

</script>

<template>
<div>
  <h1>About</h1>
    <ul>
      <li v-for="li of list">{{ li }}</li>
    </ul>
    <ClientOnly>
      <AlertMessage message = "Alert me!"> </AlertMessage>
    </ClientOnly>
</div>
</template>
