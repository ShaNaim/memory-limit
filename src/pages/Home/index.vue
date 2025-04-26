<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <InitialCard />
    <AboutTheGame />
    <ScienceBehindTheGame />
    <HowToPlay />
    <GetStarted />
  </div>
</template>
<script setup>
import InitialCard from '@/components/templates/card/InitialCard.vue'
import AboutTheGame from './AboutTheGame.vue'
import ScienceBehindTheGame from './ScienceBehindTheGame.vue'
import HowToPlay from './HowToPlay.vue'
import GetStarted from './GetStarted.vue'
</script>
