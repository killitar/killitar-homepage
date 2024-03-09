<script setup lang="ts">
function getCurrentYear(): number {
  return new Date().getFullYear();
}
</script>
<template>
  <h5 class="text-primary-variant duration-300">
    &copy; {{ getCurrentYear() }}. Miroslav Lincovsci. All rights reserved.
  </h5>
</template>
