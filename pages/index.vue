<script setup lang="ts">
const counter = useCounter();
const {role} = useAuth();
const countDown = ref(10)
const count_down_timer = ref()

definePageMeta({
  layout: false,
});

useHead({
    title: 'Homepage'
  })
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      Hello header?
    </template>
    <template #default>
      <div>
        <h1>Index (Counter: {{ counter }})</h1>
        <nuxt-link to="/counter">Go to /counter</nuxt-link>
        <button v-if="!role" @click="role = 'admin'">Login as admin</button>
      </div>
    </template>
  </NuxtLayout>
</template>




