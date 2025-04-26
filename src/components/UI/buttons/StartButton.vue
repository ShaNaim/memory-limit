<!-- src/components/AnimatedButton.vue -->
<template>
  <router-link
    to="/game"
    class="text-center w-32 group relative inline-block overflow-hidden rounded-sm border border-success px-8 py-3 text-sm font-medium text-success bg-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-none"
  >
    <div>
      <span
        class="absolute inset-y-0 left-0 w-[2px] bg-success transition-all duration-500 group-hover:w-full"
      ></span>
      <span class="relative transition-colors duration-300 group-hover:text-white">
        {{ title }}
      </span>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Start',
  },
})
</script>
