<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import listThemes from '../data/listThemes.json'

const initialTheme = document.querySelector('html')?.classList.value
const parentDiv = ref<HTMLDivElement | null>(null)
const isThemeListDropdownVisible = ref(false)
const currentTheme = ref(initialTheme ?? 'gruvbox-dark')

function toggleThemeListDropdownVisible(): void {
  isThemeListDropdownVisible.value = !isThemeListDropdownVisible.value
}

function selectTheme(theme: string): void {
  const selectedClassTheme = theme

  if (selectedClassTheme) {
    document.body.classList.remove(currentTheme.value)
    document.body.classList.add(selectedClassTheme)

    currentTheme.value = selectedClassTheme
    toggleThemeListDropdownVisible()
  }
}
function handleClickOutside(event: MouseEvent): void {
  if (parentDiv.value && !parentDiv.value.contains(event.target as Node))
    isThemeListDropdownVisible.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="parentDiv" class="relative">
    <div class="flex items-center gap-2">
      <div
        class="flex h-5 w-10 items-center justify-evenly rounded-full bg-secondary-variant duration-300"
      >
        <div class="h-2 w-2 rounded-full bg-secondary duration-300" />
        <div class="h-2 w-2 rounded-full bg-primary duration-300" />
        <div class="h-2 w-2 rounded-full bg-primary-variant duration-300" />
      </div>
      <button
        class="group flex items-center gap-1"
        aria-haspopup="true"
        :aria-expanded="isThemeListDropdownVisible"
        @click="toggleThemeListDropdownVisible"
      >
        <span
          class="text-sm font-medium leading-none text-primary-variant duration-300 group-hover:text-primary"
        >
          {{ currentTheme }}
        </span>
      </button>
    </div>
    <transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-300 ease-out"
    >
      <div
        v-if="isThemeListDropdownVisible"
        class="absolute right-0 z-10 mt-1 min-w-44 origin-top-right rounded-md border border-primary bg-secondary-variant py-3 shadow-lg"
        role="menu"
      >
        <ul class="py-1">
          <li
            v-for="theme in listThemes"
            :key="theme.name"
            class="block w-full cursor-pointer px-2 py-1 text-left text-sm text-primary-variant duration-300 hover:bg-background hover:text-primary"
            :class="{ 'font-bold text-primary': theme.name === currentTheme }"
            @click="selectTheme(theme.name)"
          >
            {{ theme.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
