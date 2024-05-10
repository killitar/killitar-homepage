<script setup lang="ts">
import { ref } from 'vue'

const isAccordionOpen = ref<boolean>(false)
function toggleAccordionOpen(): void {
  isAccordionOpen.value = !isAccordionOpen.value
}
</script>

<template>
  <div class="rounded-xl border-2 border-secondary p-2 duration-300">
    <button
      type="button"
      class="group flex min-w-full items-center justify-between"
      @click="toggleAccordionOpen"
    >
      <p class="text-2xl text-primary duration-300 group-hover:text-secondary">
        about me
      </p>
      <svg
        id="Layer_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="h-5 w-5 fill-primary duration-300 group-hover:fill-secondary"
        :class="[isAccordionOpen ? 'rotate-90' : 'rotate-0']"
        viewBox="0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M269.043,389.286V283.429
                H109.714v-54.857h159.329V122.704l133.242,133.307L269.043,389.286z"
            />
          </g>
        </g>
      </svg>
    </button>
    <transition
      enter-from-class="opacity-0"
      enter-active-class="transition duration-700"
    >
      <div
        v-if="isAccordionOpen"
        class="scrollbar-hide h-4/5 overflow-y-auto overscroll-y-none scroll-smooth"
      >
        <hr class="border-1 my-2 border-secondary">
        <p class="text-secondary duration-300">
          a front-end web developer, currently studying at the Russian
          University of Cooperation. i love how the web can connect people, it
          inspires me to get better and keep learning.
        </p>
      </div>
    </transition>
  </div>
</template>
