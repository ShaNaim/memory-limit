<!-- src/App.vue -->
<template>
  <TopNav />
  <main class="min-h-screen bg-base-100 font-inter">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script setup>
import TopNav from './components/navigation/TopNav.vue'
import Footer from './components/templates/layout/Footer.vue'
// Nothing changed here
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
@import './styles/tailwind.css'; /* Try this if other methods fail */
</style>
