<template>
  <div class="flex justify-start">
    <div class="flex flex-row gap-8 md:gap-32">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="text-2xl md:text-8xl font-bold text-content border border-neutral bg-black/30 dark:bg-black/30 backdrop-blur-md px-8 rounded-lg text-center"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [1, 2, 3, 4],
  },
  limit: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['timerEnded'])

const timeLeft = ref(props.limit)
let intervalId = null

function startTimer() {
  timeLeft.value = props.limit
  intervalId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    }
    if (timeLeft.value === 0) {
      clearInterval(intervalId)
      emit('timerEnded')
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
