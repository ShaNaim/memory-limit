<template>
  <header class="bg-white dark:bg-base-300 px-8">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <router-link to="/" class="block text-teal-600 dark:text-teal-300" href="#">
            <div class="inline-flex">
              <BrainIcon widthClass="w-9" heightClass="w-9" class="mr-4" />
              <h1 class="text-2xl font-medium bg-clip-text text-success">{{ VITE_APP_NAME }}</h1>
            </div>
          </router-link>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link
                  to="/about"
                  class="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >About
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="relative">
            <button
              @click="showProfile = !showProfile"
              type="button"
              class="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
            >
              <span class="sr-only">Toggle dashboard menu</span>
              <img src="../../assets/user-icon.svg" alt="" class="size-10 object-cover" />
            </button>

            <transition name="slide-fade">
              <div
                v-if="showProfile"
                class="absolute end-0 z-10 mt-0.5 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                role="menu"
              >
                <div class="p-2">
                  <nav class="block md:hidden mb-2">
                    <ul class="space-y-1">
                      <li>
                        <router-link
                          to="/about"
                          class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          >About
                        </router-link>
                      </li>
                    </ul>
                  </nav>

                  <div v-if="login">
                    <router-link
                      to="/about"
                      class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      >My profile
                    </router-link>

                    <router-link
                      to="/about"
                      class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      >History
                    </router-link>
                  </div>
                  <div v-else>
                    <router-link
                      to="/about"
                      class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      >Login
                    </router-link>
                  </div>

                  <form method="POST" action="#">
                    <button
                      type="submit"
                      class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                      role="menuitem"
                    >
                      <LogoutIcon />
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BrainIcon from '@/assets/icons/brain.vue'
import LogoutIcon from '@/assets/icons/LogoutIcon.vue'
const { VITE_APP_NAME } = import.meta.env
const showProfile = ref(false)
</script>

<style></style>
