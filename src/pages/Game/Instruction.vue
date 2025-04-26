<template>
  <h1 class="text-5xl font-extrabold text-primary-content drop-shadow-lg">{{ instruction }}</h1>
</template>
<script setup>
const props = defineProps({
  instruction: { type: String, default: 'Add 1 to Each Number' },
})
</script>
