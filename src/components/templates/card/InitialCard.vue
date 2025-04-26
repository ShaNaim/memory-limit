<template>
  <BaseContainer class="py-16">
    <h1 class="max-w-[32ch] text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
      <strong class="text-success">
        {{ VITE_APP_NAME }}
      </strong>
      <span class="text-gray-500"> - Ride the rapid flow of numbers and memory </span>
    </h1>

    <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
      Sharpen working-memory capacity with this science-driven training tool. Convert brief digit
      sequences using specified arithmetic rules, then reproduce the results under time pressure—an
      evidence-based workout for focus, mental math, and rapid information recall.
    </p>

    <div class="mt-4 flex gap-4 sm:mt-6">
      <StartButton />
    </div>
  </BaseContainer>
</template>

<script setup>
import StartButton from '@/components/UI/buttons/StartButton.vue'
import BaseContainer from '@/components/templates/layout/BaseContainer.vue'
const { VITE_APP_NAME } = import.meta.env
</script>
