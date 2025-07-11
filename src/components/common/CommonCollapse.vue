<template>
  <div
  class="w-full  flex flex-col collapse-container">
    <!-- Title is always visible and clickable -->
    <div
      @click="toggleCollapse"
      ref="titleRef"
      :id="props.collapseTitle"
      class="cursor-pointer flex justify-between items-center p-2 px-3"
    >
      <div class="flex gap-x-4 items-center">
        <slot name="icon"></slot>
        <slot name="title"></slot>
      </div>
      <!-- if collapse has body show icon arrow -->
      <svg
        v-if="isHasSlotBody"
        xmlns="http://www.w3.org/2000/svg"
        class="transform transition-transform duration-300"
        :class="{ 'rotate-90': isOpen, 'rotate-0': !isOpen }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="m10 17l5-5l-5-5"
        />
      </svg>
    </div>

    <!-- Collapsible content -->
    <div ref="collapseRef" class="overflow-hidden transition-all duration-500" :style="styleObject">
      <slot name="body"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, useSlots, computed } from 'vue'

//props for close collapse
const props = withDefaults(
  defineProps<{
    closeCollapse?: boolean
    collapseTitle: string
  }>(),
  {
    closeCollapse: true,
    collapseTitle: '',
  },
)

//properties
const isOpen = ref<boolean>(false)
const collapseRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const styleObject = ref<Record<string, string>>({
  maxHeight: '0px',
  transition: 'max-height 0.3s ease-in-out',
})
const slot = useSlots()

//functions
function toggleCollapse() {
  isOpen.value = !isOpen.value
}
async function handleActive(val: boolean) {
  await nextTick()
  if (!collapseRef.value) return

  if (val) {
    handleOpenCollapse();
  } else {
    handleCloseCollapse();
  }
}

function handleOpenCollapse() {
  isOpen.value = true;
    // Open: set maxHeight to scrollHeight so it expands smoothly
    styleObject.value.maxHeight = collapseRef.value?.scrollHeight + 'px'
    titleRef.value?.classList.add('active-bg')
}
function handleCloseCollapse() {
    isOpen.value = false;
    // Close: set maxHeight to 0 for collapse
    styleObject.value.maxHeight = '0px'
    titleRef.value?.classList.remove('active-bg')
}
//computed
const isHasSlotBody = computed(() => !!slot.body)


//watch
watch(
  () => props.closeCollapse,
  async (newVal) => {
    if (!isHasSlotBody.value) return
    await handleActive(newVal)
  },
)
watch(isOpen, async (val) => {
  if (!isHasSlotBody.value) return
  await handleActive(val)
})


</script>

<style scoped>
.active-bg {
  background: var(--navbar-hover-color);
  color: var(--sidebar-color);
  /* border-radius: var(--border-radius-nav); */
  transition: all 0.2s ease;
}
.collapse-container {
  /* border-radius: var(--border-radius-nav); */
  border-bottom: 1px solid #d1d5dc;
}
.collapse-container:hover > :first-child{
  border: none;
  background: var(--navbar-hover-color);
  color: var(--sidebar-color);
  /* border-radius: var(--border-radius-nav); */
  transition: all 0.2s ease;
}
</style>
