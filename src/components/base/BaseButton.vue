<template>
  <n-button
  :type="type"
  :ghost="ghost">
    <slot></slot>
  </n-button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'default';
  ghost?: boolean
}>(), {
  type: 'primary',
  ghost: false
});
</script>
