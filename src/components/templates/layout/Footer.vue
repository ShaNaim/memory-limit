<template>
  <footer class="bg-white dark:bg-base-300">
    <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
      <div class="text-center pt-32">
        <h2 class="shrink-0 px-4 text-content text-4xl dark:text-white">
          Have Some Ideas To Share
        </h2>

        <p class="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
          This project is a personal, non-commercial initiative. Its complete source code is
          open-source and publicly available. We welcome your ideas and contributions.
        </p>

        <a
          href="#"
          class="mt-8 inline-block rounded-full border border-primary px-12 py-3 text-sm font-medium text-white hover:bg-primary hover:text-white focus:ring-3 focus:outline-hidden transition duration-300"
        >
          Get Started
        </a>
      </div>

      <div
        class="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800"
      >
        <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Cookies
            </a>
          </li>
        </ul>

        <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span class="sr-only">Facebook</span>
              <FaceboolIcon />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span class="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span class="sr-only">GitHub</span>

              <GithubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup>
import GithubIcon from '@/assets/icons/GithubIcon.vue'
import FaceboolIcon from '@/assets/icons/FaceboolIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'
</script>
