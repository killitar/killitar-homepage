<script setup lang="ts">
import listProjects from '../data/listProjects.json';
import { ref } from 'vue';

const isAccordionOpen = ref<boolean>(false);
const toggleAccordionOpen = (): void => {
  isAccordionOpen.value = !isAccordionOpen.value;
};
</script>

<template>
  <button
    @click="toggleAccordionOpen"
    class="group mb-4 flex min-w-full items-center justify-between"
  >
    <p class="text-4xl text-primary duration-300 group-hover:text-secondary">
      projects
    </p>
    <svg
      viewBox="0 0 21 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="[
        'h-5',
        'w-5',
        'fill-primary',
        'duration-300',
        'group-hover:fill-secondary',
        isAccordionOpen ? 'rotate-90' : 'rotate-0',
      ]"
    >
      <path
        d="M0.666651 1.99999V26C0.667412 26.243 0.73443 26.4812 0.860487 26.6889C0.986546 26.8966 1.16687 27.066 1.38205 27.1789C1.59724 27.2918 1.83913 27.3438 2.08169 27.3295C2.32426 27.3151 2.55831 27.2348 2.75865 27.0973L20.092 15.0973C20.8106 14.6 20.8106 13.4027 20.092 12.904L2.75865 0.903992C2.55873 0.765092 2.32456 0.683637 2.08159 0.668479C1.83862 0.65332 1.59615 0.705037 1.38051 0.81801C1.16487 0.930984 0.984312 1.10089 0.858458 1.30928C0.732605 1.51766 0.666267 1.75655 0.666651 1.99999Z"
      />
    </svg>
  </button>
  <transition
    enter-from-class="opacity-0"
    enter-active-class="transition duration-700"
  >
    <div class="overscroll-contain" v-if="isAccordionOpen">
      <div
        class="mb-3 flex flex-col rounded-lg border-2 border-primary p-3 last:mb-0"
        v-for="project in listProjects"
      >
        <div class="mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1 h-5 w-5 fill-primary"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3h10.77q.69 0 1.152.463q.463.462.463 1.152v14.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h10.77q.23 0 .423-.192q.192-.193.192-.423V4.615q0-.23-.192-.423Q17.615 4 17.385 4H16v6.115l-2-1.192l-2 1.192V4H6.615q-.23 0-.423.192Q6 4.385 6 4.615v14.77q0 .23.192.423q.193.192.423.192M6 20V4zm6-9.885l2-1.192l2 1.192l-2-1.192z"
            />
          </svg>
          <a
            class="text-lg text-primary duration-300"
            :href="project.html_url"
            target="_blank"
            >{{ project.name }}</a
          >
        </div>
        <span class="text-secondary duration-300">{{
          project.description
        }}</span>
        <div class="flex items-center">
          <div
            class="mr-1 h-2 w-2 rounded-full bg-secondary duration-300"
          ></div>
          <span class="text-primary-variant duration-300">
            {{ project.language }}</span
          >
        </div>
      </div>
    </div>
  </transition>
</template>
