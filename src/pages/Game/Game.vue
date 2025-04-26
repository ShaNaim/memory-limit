<template>
  <Instruction
    v-if="showInstruction"
    :instruction="'Add 1 to Each Number'"
    @start="beginInstruction"
  />

  <CountDown v-if="showCountdown" :initialDelay="1" :startNumber="3" @finished="startGame" />
  <div v-else class="flex flex-col gap-10 items-center justify-center p-4">
    <Numbers :limit="5" :items="numbers" v-if="showNumbers" @timerEnded="showInputs()" />

    <Inputs
      v-if="showInputsSection && !endGame"
      :count="numbers.length"
      @submit="handleCodeEntry"
    />
    <Result v-if="endGame" :result="result" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Instruction from './Instruction.vue'
import Inputs from './Inputs.vue'
import Result from './Result.vue'
import CountDown from '@/components/templates/countdown/CountDown.vue'
import Numbers from '@/components/templates/card/Numbers.vue'

import { generateRandomNumbers, handleAnswersCheck } from '@/services/handler'

const showInstruction = ref(true)
const showCountdown = ref(true)
const showNumbers = ref(false)
const showInputsSection = ref(false)
const numbers = ref([])

const result = ref(0)
const endGame = ref(false)
function beginInstruction() {
  showInstruction.value = false
  showCountdown.value = true
}

function startGame() {
  showCountdown.value = false
  numbers.value = generateRandomNumbers(4, 9)
  showNumbers.value = true
}

function showInputs() {
  console.log('hello')
  showNumbers.value = false
  showInputsSection.value = true
}

function handleCodeEntry(userValue) {
  const userResult = handleAnswersCheck(userValue, numbers.value)
  if (!userResult) {
    result.value = 0
    endGame.value = true
  }
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
