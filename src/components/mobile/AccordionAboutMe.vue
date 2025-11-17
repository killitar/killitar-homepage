<script setup lang="ts">
import { ref } from 'vue'

const isAccordionOpen = ref<boolean>(false)

function toggleAccordionOpen(): void {
  isAccordionOpen.value = !isAccordionOpen.value
}
</script>

<template>
  <div
    class="rounded-xl border-2 p-2 duration-300 transition-colors"
    :class="[isAccordionOpen ? 'border-primary' : 'border-secondary']"
  >
    <button
      type="button"
      class="group flex min-w-full items-center justify-between"
      :aria-expanded="isAccordionOpen"
      aria-controls="accordion-content"
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
        class="h-5 w-5 fill-primary duration-300 transition-transform group-hover:fill-secondary"
        :class="[isAccordionOpen ? 'rotate-90' : 'rotate-0']"
        viewBox="0 0 512 512"
        xml:space="preserve"
      >
        <g><g><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M269.043,389.286V283.429 H109.714v-54.857h159.329V122.704l133.242,133.307L269.043,389.286z" /></g></g>
      </svg>
    </button>
    <transition name="accordion">
      <div
        v-if="isAccordionOpen"
        id="accordion-content"
        class="overflow-hidden"
      >
        <hr class="border-1 my-2 border-secondary">
        <p class="text-secondary duration-300">
          i'm a front-end developer who is driven by creativity and the challenge of creating beautiful, user-friendly web experiences.
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.1s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
