<!-- <template>
  <el-collapse class="bg-none" v-model="activeNames">
    <el-collapse-item style="width: 100%;" :name="useUniqueID">
      <template #title>
        <slot name="title"></slot>
      </template>
      <slot name="body"></slot>
    </el-collapse-item>
  </el-collapse>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUniqueID } from '@/utils/useUniqueID';
const activeNames = ref([])
</script>

<style scoped>
.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}

</style> -->
<template>
  <div class="w-full" @click="toggleCollapse">
    <div
      ref="collapseRef"
      class="overflow-hidden bg-white px-4 py-2"
      :style="styleObject"
    >
      <slot> This is the content inside the collapsible panel. </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const isOpen = ref(false)
const collapseRef = ref<HTMLElement | null>(null)
const styleObject = ref<Record<string, string>>({
  maxHeight: '0px',
  transition: 'max-height 0.5s ease',
})

function toggleCollapse() {
  isOpen.value = !isOpen.value
}

watch(isOpen, async (val) => {
  await nextTick()
  if (!collapseRef.value) return

  if (val) {
    // Open: set maxHeight to scrollHeight so it expands smoothly
    styleObject.value.maxHeight = collapseRef.value.scrollHeight + 'px'
  } else {
    // Close: set maxHeight to 0 for collapse
    styleObject.value.maxHeight = '0px'
  }
})
</script>
