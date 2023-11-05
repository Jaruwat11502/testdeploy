<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | NuxtApp` : 'NuxtApp'
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

