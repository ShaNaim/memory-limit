<template>
  <section
    ref="sectionRef"
    class="my-16 overflow-hidden opacity-0 -translate-x-10 transition-all duration-700"
  >
    <h2 class="text-2xl font-bold mb-2">
      <strong>Miller’s “Magic Number Seven”</strong>
    </h2>
    <div ref="underlineRef" class="border-base-g w-0 transition-all duration-1000 mb-6"></div>
    <p class="text-sub-content leading-relaxed">
      NeuroFlux builds directly on <strong>Miller’s “Magic Number Seven”</strong>—the finding that
      most adults can hold about <strong>7 ± 2</strong> “<strong>chunks</strong>” of information in
      <strong>short-term memory</strong>. By presenting sequences of 4–8 digits and asking players
      to transform them mentally, the game challenges—and seeks to expand—this canonical span.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const sectionRef = ref(null)
const underlineRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-x-0')
        underlineRef.value?.classList.add('w-full')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(sectionRef.value)
})
</script>
