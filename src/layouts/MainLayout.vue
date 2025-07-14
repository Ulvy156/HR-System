<template>
  <section class="flex h-screen overflow-hidden">
    <!-- Sidebar (Resizable) -->
    <section
      class="relative"
      :style="{ width: sidebarPercent + '%' }"
    >
      <aside
        id="aside-nav"
        class="h-full shadow-md sticky top-0 z-[999] bg-white"
      >
        <img src="../assets/logo.svg" alt="" />
        <slot name="aside"></slot>
      </aside>

      <!-- Resize handle -->
      <div
        class="absolute right-0 top-0 w-2 h-full cursor-col-resize z-[1000] bg-transparent"
        @mousedown="startResize"
      ></div>
    </section>

    <!-- Main Content (fills remaining) -->
    <section class="flex-1 overflow-y-auto">
      <header
        class="w-full flex justify-between items-center h-fit px-5 py-3  sticky z-[999] top-0 bg-white"
      >
        <slot name="header"></slot>
      </header>
      <main class="ml-5 w-[97%]">
        <slot name="main" >main</slot>
      </main>
    </section>
  </section>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const sidebarPercent = ref(20) // Start at 20%
let isResizing = false

function startResize() {
  isResizing = true
  document.addEventListener('mousemove', resizeSidebar)
  document.addEventListener('mouseup', stopResize)
}

function resizeSidebar(e: MouseEvent) {
  if (!isResizing) return

  const percent = (e.clientX / window.innerWidth) * 100
  // Clamp between 15% and 30%
  sidebarPercent.value = Math.min(30, Math.max(15, percent))
}


function stopResize() {
  isResizing = false
  document.removeEventListener('mousemove', resizeSidebar)
  document.removeEventListener('mouseup', stopResize)
}

onBeforeUnmount(() => stopResize())
</script>


<style>
h2{
  font-size: var(--main-layout-h2);
}
#aside-nav{
  background: var(--sidebar-color);
}
.action-icons > * {
  cursor: pointer;
}
.action-icons > *:hover {
  backdrop-filter: blur(10px);
}
.section-dashboard {
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
}
.section-dashboard  .child-section {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.section-dashboard > .child-section:hover {
  border-radius: var(--border-radius-nav);
  background: var(--navbar-hover-color);
  color: white;
  transition-property: all;
  transition-timing-function: var(
    --tw-ease,
    var(--default-transition-timing-function) /* cubic-bezier(0.4, 0, 0.2, 1) */
  );
  transition-duration: var(--tw-duration, var(--default-transition-duration) /* 150ms */);
}
</style>
