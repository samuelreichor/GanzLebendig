<script setup lang="ts">
  import { onMounted } from 'vue';

  const classes = {
    root: '',
  };

  const props = defineProps({});

  onMounted(() => {
    console.log('Successfully mounted');
  });
</script>

<template>
  <div :class="classes.root">finally rendered</div>
</template>
