<template>
  <section
    ref="sectionRef"
    class="my-16 overflow-hidden opacity-0 translate-x-10 transition-all duration-700"
  >
    <h2 class="text-2xl font-bold mb-2">
      <strong>Speed-Accuracy Tradeoff &amp; Logarithmic Reward</strong>
    </h2>
    <div ref="underlineRef" class="border-base-g w-0 transition-all duration-1000 mb-6"></div>
    <p class="text-sub-content leading-relaxed">
      Human reaction times and error rates follow <strong>speed-accuracy tradeoffs</strong>. To
      encourage thoughtful yet brisk play, NeuroFlux’s scoring uses a
      <strong>logarithmic time curve</strong>—rewarding fast responses with diminishing returns near
      the limit. This design reflects principles from <strong>cognitive modeling</strong>, ensuring
      genuine improvements in mental processing.
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
