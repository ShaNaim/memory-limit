<template>
  <div
    class="flex flex-col items-center justify-center p-8 h-screen overflow-x-auto overflow-y-hidden"
  >
    <div
      :style="cardStyle"
      class="bg-black/20 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md text-center transition-shadow duration-500"
    >
      <h1 class="text-4xl font-extrabold mb-4 text-accent">
        {{ funMessage }}
      </h1>
      <div class="relative h-4 w-full bg-neutral/30 rounded-full overflow-hidden mb-3">
        <div
          class="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out bg-secondary"
          :style="barStyle"
        ></div>
      </div>
      <p class="mt-3 text-lg text-content">
        Your final vibe check score: <span class="font-bold">{{ result }}</span>
      </p>
    </div>
    <div class="flex flex-col p-10 gap-8 justify-center items-center">
      <h1 class="text-3xl text-content">Want to try again</h1>
      <StartButton />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StartButton from '@/components/UI/buttons/StartButton.vue'

const route = useRoute()
const result = computed(() => Number(route.params.score) || 0)

const funMessage = computed(() => {
  if (result.value > 10) return '👽 Are you even human?! This score is suspiciously epic.'
  if (result.value > 8) return '⭐ Out of This World! Stellar Performance!'
  if (result.value > 5) return '👍 Above Average Power-up!'
  return '😉 Below Average, Keep Pushing!'
})

const barStyle = computed(() => {
  const min = 3,
    max = 12
  const clamped = Math.min(Math.max(result.value, min), max)
  const percent = ((clamped - min) / (max - min)) * 100
  return { width: `${percent}%` }
})

const cardStyle = computed(() => {
  let glowColor = ''
  if (result.value > 11) {
    glowColor = 'rgba(255, 0, 0, 0.8)'
  } else if (result.value > 8) {
    glowColor = 'rgba(255, 215, 0, 0.8)'
  } else if (result.value === 5) {
    glowColor = 'rgba(59, 130, 246, 0.7)'
  } else if (result.value > 5) {
    glowColor = 'rgba(52, 211, 153, 0.7)'
  } else {
    glowColor = 'rgba(234, 179, 8, 0.7)'
  }
  return { boxShadow: `0 0 16px ${glowColor}` }
})
</script>
