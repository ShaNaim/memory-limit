<template>
  <form @submit.prevent="onSubmit">
    <div class="flex space-x-4 gap-16">
      <input
        v-for="(val, idx) in values"
        :key="idx"
        v-model="values[idx]"
        :ref="(el) => setInputRef(el, idx)"
        @keydown.space.prevent="handleAdvance(idx)"
        @keydown.enter.prevent="handleAdvance(idx)"
        class="h-32 w-32 bg-black/30 dark:bg-black/30 backdrop-blur-md border border-neutral rounded-lg text-center text-5xl focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <div class="">
      <button
        @click="onSubmit()"
        class="mt-4 px-4 bg-secondary text-secondary-content py-2 rounded-md hover:bg-secondary/90 transition"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  count: { type: Number, required: true },
})
const emit = defineEmits(['submit'])

const values = ref([])

const inputRefs = []
function setInputRef(el, idx) {
  if (el) inputRefs[idx] = el
}

watch(
  () => props.count,
  (n) => {
    values.value = Array(n).fill('')
    inputRefs.length = n

    nextTick(() => {
      inputRefs[0]?.focus()
    })
  },
  { immediate: true },
)

onMounted(() => {
  nextTick(() => {
    inputRefs[0]?.focus()
  })
})

function handleAdvance(idx) {
  if (idx < props.count - 1) {
    nextTick(() => inputRefs[idx + 1]?.focus())
  } else {
    onSubmit()
  }
}

function onSubmit() {
  emit('submit', values.value.slice())
}
</script>
