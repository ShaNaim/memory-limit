<template>
  <h1 class="text-5xl font-extrabold text-primary-content drop-shadow-lg text-center">
    {{ instruction }}
  </h1>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  instruction: { type: String, default: 'Add 1 to Each Number' },
})
const emits = defineEmits(['start'])

onMounted(() => {
  emits('start')
})
</script>
