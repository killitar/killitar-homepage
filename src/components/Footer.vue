<script setup lang="ts">
import getCurrentYear from '../utils/getCurrentYear.ts';
</script>
<template>
  <footer>
    <h5 class="text-primary-variant duration-300">
      &copy; {{ getCurrentYear() }}. Miroslav Lincovsci. All rights reserved.
    </h5>
  </footer>
</template>
