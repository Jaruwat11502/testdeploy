<script setup lang="ts">
definePageMeta({
  layout:'admin',
  middleware: ['only-admin']
})
</script>

<template>
  <div>
    <h1>Hello admin?</h1>
  </div>
</template>
