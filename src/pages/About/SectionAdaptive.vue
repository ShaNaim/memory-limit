<template>
  <section
    ref="sectionRef"
    class="my-16 overflow-hidden opacity-0 -translate-x-10 transition-all duration-700"
  >
    <h2 class="text-2xl font-bold mb-2">
      <strong>Adaptive Difficulty &amp; Spaced Retrieval</strong>
    </h2>
    <div ref="underlineRef" class="border-base-g w-0 transition-all duration-1000 mb-6"></div>
    <p class="text-sub-content leading-relaxed">
      Research on <strong>spaced retrieval</strong> shows that memory performance improves when
      recall opportunities are optimally spaced. NeuroFlux’s
      <strong>adaptive algorithm</strong> raises sequence length after success and lowers it after
      errors, mimicking an ideal practice schedule. This dynamic adjustment keeps the task in the
      <strong>zone of proximal development</strong>, where challenge stays just ahead of ability.
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
