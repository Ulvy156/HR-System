<template>
  <section class="flex">
    <aside class="h-[100vh] w-[20%] shadow-md">
      <slot name="aside"></slot>
    </aside>
    <header class="w-full h-fit flex justify-between items-center p-6">
      <slot name="header"></slot>
    </header>
  </section>
</template>

<script setup lang="ts"></script>

<style>
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
.section-dashboard > .child-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.section-dashboard:has(.active) > .child-section {
  border-radius: 20px;
  background: blue;
  color: white;
}
.section-dashboard > .child-section:hover {
  border-radius: 50px;
  background: blue;
  color: white;
  transition-property: all;
  transition-timing-function: var(
    --tw-ease,
    var(--default-transition-timing-function) /* cubic-bezier(0.4, 0, 0.2, 1) */
  );
  transition-duration: var(--tw-duration, var(--default-transition-duration) /* 150ms */);
}
</style>
