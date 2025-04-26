<template>
  <BaseContainer>
    <div
      ref="sectionRef"
      class="overflow-hidden opacity-0 -translate-x-10 transition-all duration-700"
    >
      <span class="flex items-center">
        <span class="h-px flex-1 bg-gradient-to-r from-transparent to-success"></span>
        <span class="shrink-0 px-4 text-content text-4xl dark:text-white">How To Play</span>
        <span class="h-px flex-1 bg-gradient-to-l from-transparent to-success"></span>
      </span>
      <p class="text-sub-content leading-relaxed py-8 sm:px-16 text-lg">
        A sequence of digits will flash briefly—commit it to memory, apply the displayed rule to
        each number, and enter the transformed results in order. Tap Submit to verify your answers;
        perfect accuracy extends your working-memory span as you play.
      </p>
    </div>

    <div class="text-base-content font-sans">
      <main class="container mx-auto py-12 space-y-12">
        <section class="grid gap-8 lg:grid-cols-2">
          <div
            class="bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 p-6 rounded-lg shadow-lg"
          >
            <h3 class="text-xl font-semibold mb-2">Memorization Phase</h3>
            <p>
              A sequence (e.g. <span class="font-mono">8 4 7 3</span>) will appear for a few
              seconds. Focus on both the digits and their positions.
            </p>
          </div>

          <div
            class="bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 p-6 rounded-lg shadow-lg"
          >
            <h3 class="text-xl font-semibold mb-2">Response Entry</h3>
            <p>
              Once the numbers vanish, blank fields replace them. Enter your transformed sequence
              (e.g. <span class="font-mono">9 5 8 4</span>) according to the rule.
            </p>
          </div>

          <div
            class="bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 p-6 rounded-lg shadow-lg"
          >
            <h3 class="text-xl font-semibold mb-2">Progression</h3>
            <p>
              Sequences begin at length 4 and increase as you succeed. Challenge yourself to
              remember ever-longer chains.
            </p>
          </div>

          <div
            class="bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 p-6 rounded-lg shadow-lg"
          >
            <h3 class="text-xl font-semibold mb-2">Game Over</h3>
            <p>
              The session ends when a submitted answer remains incorrect after your one retry. Your
              final score and “effective span” will then be displayed.
            </p>
          </div>
        </section>
      </main>
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
