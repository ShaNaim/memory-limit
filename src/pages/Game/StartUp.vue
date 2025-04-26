<template>
  <div
    class="w-full max-w-lg bg-gray-400/20 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 space-y-6 text-center relative"
  >
    <h1 class="text-5xl font-extrabold text-primary-content drop-shadow-lg">
      Welcome to

      <span class="text-success"> NeuroFlux </span>
    </h1>
    <button
      @click="showModal = true"
      class="text-sm text-secondary-content underline hover:text-secondary-content/80 transition"
    >
      How to Play?
    </button>
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">How to Play</h2>
          <ol class="list-decimal list-inside text-left space-y-2 text-gray-700 dark:text-gray-300">
            <li>Press <strong>Begin</strong> to view the rule.</li>
            <li>Memorize the sequence of digits and their positions.</li>
            <li>Enter the transformed sequence according to the rule.</li>
            <li>Submit to check; perfect answers increase difficulty.</li>
            <li>The game ends after one retry; your Effective Span is shown.</li>
          </ol>
          <button
            @click="showModal = false"
            class="mt-4 w-full bg-secondary text-secondary-content py-2 rounded-md hover:bg-secondary/90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
    <div>
      <button
        @click="emit('clicked')"
        class="mt-4 relative inline-block px-8 py-3 font-bold rounded-full text-white overflow-hidden group"
      >
        <span
          class="absolute inset-0 bg-gradient-to-r from-accent to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
        ></span>
        <span class="relative">Begin</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['clicked'])

const showModal = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
