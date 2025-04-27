<template>
  <div class="flex flex-col items-center space-y-8">
    <button
      v-if="!counting && !inDelay"
      @click="begin()"
      class="text-center w-32 group relative inline-block overflow-hidden rounded-sm border border-secondary px-8 py-3 text-sm font-medium text-secondary-content bg-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-none"
    >
      <div>
        <span
          class="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all duration-500 group-hover:w-full"
        ></span>
        <span class="relative transition-colors duration-300 group-hover:text-white"> Start </span>
      </div>
    </button>

    <div v-else-if="inDelay" class="text-6xl font-medium text-secondary-content drop-shadow-lg">
      {{ startText }}
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
import { ref, onMounted } from 'vue'

const props = defineProps({
  initialDelay: { type: Number, default: 3 },
  startNumber: { type: Number, default: 5 },
  startSecondPart: { type: Boolean, default: true },
  startText: { type: String, default: 'Round 1' },
})
const emit = defineEmits(['finished'])

const inDelay = ref(props.startSecondPart)
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

onMounted(() => {
  if (props.startSecondPart) begin()
})
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
