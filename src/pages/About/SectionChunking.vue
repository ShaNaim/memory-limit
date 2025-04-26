<template>
  <section
    ref="sectionRef"
    class="my-16 overflow-hidden opacity-0 translate-x-10 transition-all duration-700"
  >
    <h2 class="text-2xl font-bold mb-2">
      <strong>Chunking &amp; Cognitive Load Management</strong>
    </h2>
    <div ref="underlineRef" class="border-base-g w-0 transition-all duration-1000 mb-6"></div>
    <p class="text-sub-content leading-relaxed">
      Miller showed that familiar patterns (<strong>chunking</strong>) allow us to remember more
      information with the same mental effort. NeuroFlux leverages this by using simple arithmetic
      rules—add, subtract, multiply, divide—to create new, repeatable patterns that players learn to
      “<strong>chunk</strong>” over time. This repeated exposure reduces
      <strong>intrinsic load</strong>, enabling players to allocate more attention to sequence
      retention and recall.
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
