<template>
  <div
    class="min-h-screen flex flex-col gap-10 items-center justify-start bg-gradient-to-br from-primary to-base-100 p-8"
  >
    <StartUp v-if="!startGame" @clicked="beginGame()" />
    <Game v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Game from './Game.vue'

import StartUp from './StartUp.vue'

const startGame = ref(false)

const beginGame = () => {
  startGame.value = true
}
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
