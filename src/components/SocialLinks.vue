<script setup lang="ts">
import socialLinks from '../data/socialLinks.json'
</script>

<template>
  <div
    class="my-4 flex w-full items-center justify-evenly border-y-2 border-secondary py-3 text-primary
           lg:justify-start lg:gap-6 lg:border-none lg:py-0 lg:text-primary-variant"
  >
    <a
      v-for="(link, index) in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex items-center duration-300 hover:text-secondary animate-fade-up opacity-0"
      :aria-label="link.name"
      :style="{ animationDelay: `${index * 150}ms` }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="link.viewBox"
        class="mr-1 h-7 w-7 lg:h-5 lg:w-5"
        :class="link.isFill ? 'fill-current' : 'fill-none stroke-current stroke-2'"
      >
        <path
          :d="link.path"
          :fill-rule="link.isFill ? 'evenodd' : undefined"
          :clip-rule="link.isFill ? 'evenodd' : undefined"
          :stroke-linecap="!link.isFill ? 'round' : undefined"
          :stroke-linejoin="!link.isFill ? 'round' : undefined"
        />
      </svg>

      <span class="hidden lowercase lg:block">
        {{ link.name }}
      </span>
    </a>
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px); /* 1rem */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}
</style>
