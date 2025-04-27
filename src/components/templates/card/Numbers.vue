<template>
  <div class="flex justify-start overflow-x-auto overflow-y-hidden">
    <div class="flex" :style="{ gap: computedGap }">
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
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [1, 2, 3, 4],
  },
  limit: {
    type: Number,
    required: true,
    default: 5,
  },
})

const emit = defineEmits(['timerEnded'])

// Compute a dynamic gap that shrinks as the number of items increases
const computedGap = computed(() => {
  const len = props.items.length
  const raw = 32 - (len - 1) * 4
  return `${Math.max(4, raw)}px`
})

const timeLeft = ref(props.limit)
let intervalId = null

function startTimer() {
  timeLeft.value = props.limit
  intervalId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    }
    if (timeLeft.value === 0) {
      emit('timerEnded')
      clearInterval(intervalId)
    }
  }, 1000)
}

onMounted(startTimer)
onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
