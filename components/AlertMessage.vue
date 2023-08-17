<script setup lang="ts">
const props = defineProps<{
    message: string
}>()

window.alert(props.message)
</script>


<template>

</template>