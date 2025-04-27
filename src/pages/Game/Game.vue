<template>
  <div>
    <div class="min-h-screen flex flex-col gap-[20vh] items-center justify-start">
      <Instruction :instruction="instructionText" @start="goTo('countdown')" />
      <CountDown
        v-if="stage === 'countdown'"
        :initialDelay="1"
        :startNumber="3"
        :startSecondPart="startSecondPart"
        :startText="startText"
        @finished="beginRound"
      />
      <Numbers
        v-if="stage === 'numbers'"
        :items="numbers"
        :limit="3"
        @timerEnded="() => goTo('inputs')"
      />
      <Inputs v-if="stage === 'inputs'" :count="numbers.length" @submit="checkAnswers" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Instruction from './Instruction.vue'
import CountDown from '@/components/templates/countdown/CountDown.vue'
import Numbers from '@/components/templates/card/Numbers.vue'
import Inputs from './Inputs.vue'
import { generateRandomNumbers, handleAnswersCheck } from '@/services/handler'

const router = useRouter()
const currentLevel = ref(4)
const startSecondPart = ref(false)
const startText = ref('Round 1')
const stage = ref('countdown')
const numbers = ref([])

const instructionText = computed(() => `Add 1 to Each Number`)

function goTo(next) {
  stage.value = next
}

function beginRound() {
  numbers.value = generateRandomNumbers(currentLevel.value, 9)
  stage.value = 'numbers'
}

function checkAnswers(userInput) {
  const correct = handleAnswersCheck(userInput, numbers.value)
  console.log({ correct })
  if (correct) {
    currentLevel.value++
    startSecondPart.value = true
    startText.value = `Round ${currentLevel.value - 3}`
    goTo('countdown')
  } else {
    router.push({ name: 'Result', params: { score: currentLevel.value } })
  }
}
</script>
