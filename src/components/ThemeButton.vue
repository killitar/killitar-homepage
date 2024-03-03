<script setup lang="ts">
import { ref } from 'vue';
import listThemes from '../data/listThemes.json';

const props = defineProps<{
  initialThemeName: string;
}>();

const isThemeListDropdownVisible = ref(false);
const currentTheme = ref(props.initialThemeName);

const toggleThemeListDropdownVisible = (): void => {
  isThemeListDropdownVisible.value = !isThemeListDropdownVisible.value;
};

const selectTheme = (theme: string): void => {
  const selectedClassTheme = theme;

  if (selectedClassTheme) {
    document.body.classList.remove(currentTheme.value);
    document.body.classList.add(selectedClassTheme);

    currentTheme.value = selectedClassTheme;
    toggleThemeListDropdownVisible();
  }
};
</script>

<template>
  <div class="flex items-center justify-end">
    <div class="flex items-center">
      <div
        @click="toggleThemeListDropdownVisible"
        class="group flex items-center"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 cursor-pointer fill-primary-variant duration-300 group-hover:fill-primary"
        >
          <path
            d="M8.25004 0C1.87004 0 -0.859956 7.38 0.240044 9.92C1.06004 11.81 2.86004 10 3.58004 10.92C5.46004 13.38 1.47004 14.73 3.67004 15.6C6.26004 16.66 16 16 16 7.07C16 4.38 14.66 0 8.25004 0ZM4.47004 9C4.17472 8.99409 3.88772 8.90112 3.64502 8.73275C3.40233 8.56438 3.21474 8.3281 3.1058 8.05354C2.99685 7.77899 2.97139 7.47838 3.03262 7.18941C3.09384 6.90044 3.23901 6.63598 3.44994 6.42919C3.66086 6.2224 3.92814 6.08249 4.21827 6.027C4.50839 5.97152 4.80844 6.00292 5.08078 6.11728C5.35313 6.23164 5.58565 6.42387 5.74918 6.66985C5.91272 6.91583 5.99998 7.20462 6.00004 7.5C6.00004 7.89783 5.84201 8.27936 5.5607 8.56066C5.2794 8.84197 4.89787 9 4.50004 9H4.46804H4.47004ZM6.00004 3.5C6.00004 3.20333 6.08802 2.91332 6.25284 2.66664C6.41766 2.41997 6.65193 2.22771 6.92602 2.11418C7.20011 2.00065 7.50171 1.97094 7.79268 2.02882C8.08365 2.0867 8.35093 2.22956 8.5607 2.43934C8.77048 2.64912 8.91334 2.91639 8.97122 3.20737C9.0291 3.49834 8.9994 3.79994 8.88586 4.07403C8.77233 4.34811 8.58007 4.58238 8.3334 4.7472C8.08673 4.91203 7.79672 5 7.50004 5H7.46804C7.07579 4.99163 6.70243 4.82991 6.42801 4.54951C6.15359 4.2691 5.99995 3.89234 6.00004 3.5ZM8.47004 14C8.17472 13.9941 7.88772 13.9011 7.64502 13.7328C7.40232 13.5644 7.21474 13.3281 7.1058 13.0535C6.99685 12.779 6.97139 12.4784 7.03262 12.1894C7.09384 11.9004 7.23901 11.636 7.44994 11.4292C7.66086 11.2224 7.92814 11.0825 8.21827 11.027C8.50839 10.9715 8.80844 11.0029 9.08078 11.1173C9.35313 11.2316 9.58565 11.4239 9.74918 11.6698C9.91272 11.9158 9.99998 12.2046 10 12.5C10 12.8978 9.84201 13.2794 9.5607 13.5607C9.2794 13.842 8.89787 14 8.50004 14H8.46804H8.47004ZM12.47 11C12.1747 10.9941 11.8877 10.9011 11.645 10.7328C11.4023 10.5644 11.2147 10.3281 11.1058 10.0535C10.9969 9.77899 10.9714 9.47838 11.0326 9.18941C11.0938 8.90044 11.239 8.63598 11.4499 8.42919C11.6609 8.2224 11.9281 8.08249 12.2183 8.02701C12.5084 7.97152 12.8084 8.00292 13.0808 8.11728C13.3531 8.23164 13.5856 8.42387 13.7492 8.66985C13.9127 8.91583 14 9.20462 14 9.5C14 9.89783 13.842 10.2794 13.5607 10.5607C13.2794 10.842 12.8979 11 12.5 11H12.468H12.47ZM12.47 6C12.1747 5.99409 11.8877 5.90112 11.645 5.73275C11.4023 5.56438 11.2147 5.3281 11.1058 5.05354C10.9969 4.77899 10.9714 4.47837 11.0326 4.18941C11.0938 3.90044 11.239 3.63598 11.4499 3.42919C11.6609 3.2224 11.9281 3.08249 12.2183 3.027C12.5084 2.97152 12.8084 3.00292 13.0808 3.11728C13.3531 3.23164 13.5856 3.42387 13.7492 3.66985C13.9127 3.91583 14 4.20462 14 4.5C14 4.89783 13.842 5.27936 13.5607 5.56066C13.2794 5.84197 12.8979 6 12.5 6H12.468H12.47Z"
          />
        </svg>
        <button
          class="w-36 text-base text-primary-variant duration-300 group-hover:text-primary"
        >
          {{ currentTheme }}
        </button>
      </div>
      <div
        class="flex h-5 w-10 items-center justify-evenly rounded-full bg-secondary-variant"
      >
        <div class="h-2 w-2 rounded-full bg-secondary"></div>
        <div class="h-2 w-2 rounded-full bg-primary"></div>
        <div class="h-2 w-2 rounded-full bg-primary-variant"></div>
      </div>

      <transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
      >
        <div
          v-if="isThemeListDropdownVisible"
          class="absolute top-24 rounded-sm border-2 border-primary bg-secondary-variant py-3"
        >
          <ul class="flex flex-col items-start">
            <li
              class="mb-2 w-full cursor-pointer px-2 text-primary-variant last:mb-0 hover:bg-background"
              v-for="theme in listThemes"
              :key="theme.name"
              @click="selectTheme(theme.name)"
            >
              {{ theme.name }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
