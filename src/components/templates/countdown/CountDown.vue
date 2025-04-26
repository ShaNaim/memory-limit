<template>
  <div class="flex flex-col items-center space-y-8">
    <button
      v-if="!counting && !inDelay"
      @click="begin()"
      class="px-6 py-3 bg-primary text-primary-content rounded-md shadow hover:bg-primary/90 transition"
    >
      Start
    </button>

    <div v-else-if="inDelay" class="text-6xl font-medium text-secondary-content drop-shadow-lg">
      Starting…
    </div>

    <transition name="pop">
      <div v-if="counting" class="text-6xl md:text-8xl font-bold text-content" :key="current">
        <span v-if="current !== 0">
          {{ current }}
        </span>
        <span v-else> Lets Go </span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialDelay: { type: Number, default: 3 },
  startNumber: { type: Number, default: 5 },
})
const emit = defineEmits(['finished'])

const inDelay = ref(false)
const counting = ref(false)
const current = ref(props.startNumber)
let intervalId = null

function begin() {
  inDelay.value = true
  setTimeout(() => {
    inDelay.value = false
    counting.value = true
    current.value = props.startNumber

    intervalId = setInterval(() => {
      if (current.value <= 0) {
        clearInterval(intervalId)
        counting.value = false
        emit('finished')
      } else {
        current.value -= 1
      }
    }, 1000)
  }, props.initialDelay * 1000)
}
</script>

<style scoped>
.pop-enter-from {
  transform: scale(0);
  opacity: 0;
}
.pop-enter-active {
  transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s ease-out;
}
.pop-enter-to {
  transform: scale(1);
  opacity: 1;
}
</style>
