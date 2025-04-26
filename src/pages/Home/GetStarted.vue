<template>
  <div class="h-32 w-[90%] md:w-[50%]">
    <div
      class="bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 text-primary-content py-12 rounded"
    >
      <div class="mx-auto px-4 text-center space-y-4">
        <h1 class="text-3xl font-bold">Ready To Start ?</h1>
        <p class="text-xl">Ready to Discover you Flex Capabilities</p>
        <StartButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import StartButton from '@/components/UI/buttons/StartButton.vue'
</script>
