<template>
  <BaseContainer class="pb-16">
    <div
      ref="sectionRef"
      class="overflow-hidden opacity-0 translate-y-20 transform transition-all duration-1000"
    >
      <span class="flex items-center">
        <span class="h-px flex-1 bg-gradient-to-r from-transparent to-secondary"></span>

        <span class="sm:ps-4 text-content dark:text-content text-4xl">
          The Science Behind NeuroFlux
        </span>
      </span>
      <p class="text-sub-content leading-relaxed py-8 sm:px-16 text-lg">
        NeuroFlux is built on decades of cognitive research, beginning with
        <a
          class="underline decoration-success"
          target="_blank"
          href="https://labs.la.utexas.edu/gilden/files/2016/04/MagicNumberSeven-Miller1956.pdf"
          >Miller’s “Magic Number Seven”</a
        >
        insight that most people can hold about 7 ± 2 items in short‐term memory. By presenting
        sequences of four to eight digits and asking players to apply simple arithmetic rules—such
        as addition, subtraction, multiplication, or division—the game both challenges and trains
        working-memory capacity while encouraging the formation of mental “chunks.” An adaptive
        algorithm increases sequence length after consecutive successes and eases difficulty
        following errors, creating an optimal practice schedule akin to spaced-retrieval learning.
        To balance speed and accuracy, its scoring system uses a logarithmic time curve that rewards
        genuine improvements in processing speed without incentivizing random guesses. Finally,
        NeuroFlux calculates an “Effective Span” metric—the longest sequence length at which a
        player maintains at least 80 percent first-try accuracy—providing a clear, research-aligned
        benchmark for tracking cognitive growth over time.
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
        entry.target.classList.remove('translate-y-20')
        entry.target.classList.add('opacity-100', 'translate-y-0')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(sectionRef.value)
})
</script>
