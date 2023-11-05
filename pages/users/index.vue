<script setup lang="ts">
import axios from 'axios';
  // interface Users {
  //   id: number
  //   name: string
  // }
  // const users = ref<Users[]>([]);

  // onMounted(async()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const json = await res.json();
  //   users.value = json

  //   const result = await $fetch<any[]>('https://jsonplaceholder.typicode.com/users');
  //   users.value = result
  // })

const {data,error,pending,refresh} = await useFetch<any>('https://jsonplaceholder.typicode.com/users')
if(error.value) {
  throw createError(error.value as Error)
}

// const {data} = await useAsyncData('data', async ()=>{
//   const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//   return res.data
// })
// console.log(data)
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user of data">
        <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
  <button @click="() => refresh()">Refresh</button>
</template>
