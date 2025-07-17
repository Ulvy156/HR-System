<template>
  <n-tag :type>
    {{ content }}
  </n-tag>
</template>

<script lang="ts" setup>
defineProps<{
  type:string,
  content: string
}>()
</script>
