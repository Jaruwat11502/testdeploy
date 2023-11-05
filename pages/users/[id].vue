<script setup lang="ts">
import { useRoute } from 'vue-router';


  const route = useRoute();
  const id = route.params.id
  const { data: user } = await useFetch<any>('https://jsonplaceholder.typicode.com/users/' + id,{
    key: `users-${id.toString()}`
  })


  // if(!user) {
  //   throw createError({ statusCode: 404, statusMessage: 'User Not Found' })
  // }
  //route = '/users/:id'

  useHead({
    title: user.value.name
  })
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
  </div>
</template>



