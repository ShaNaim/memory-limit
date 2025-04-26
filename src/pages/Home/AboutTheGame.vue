<template>
  <BaseContainer class="pb-16">
    <div
      ref="sectionRef"
      class="overflow-hidden opacity-0 -translate-x-10 transition-all duration-700"
    >
      <span class="flex items-center">
        <span class="shrink-0 pe-4 text-content text-4xl">About The Game</span>
        <span class="h-px flex-1 bg-gradient-to-l from-transparent to-success"></span>
      </span>
      <p class="text-sub-content leading-relaxed py-8 sm:px-16 text-lg">
        NeuroFlux is a fast-paced cognitive workout that fuses mental math with memory mastery. In
        each 60-second round you’ll see a burst of numbers, apply a simple arithmetic rule—add,
        subtract, multiply, or divide—then reproduce the transformed sequence before it slips away.
        Sequences lengthen as you excel, pushing your working-memory “RAM” to the limit while
        adaptive scoring rewards accuracy, speed, and perfect streaks. Backed by classic memory-span
        research yet built for pick-up-and-play fun, NeuroFlux is equal parts brain-training and
        arcade challenge. How far can your mind go?
      </p>
    </div>
  </BaseContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseContainer from '@/components/templates/layout/BaseContainer.vue'
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-x-0')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(sectionRef.value)
})
</script>
