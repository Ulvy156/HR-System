<template>
  <section class="flex">
    <aside class="h-[100vh] w-[20%] shadow-md">
      <div>
        <img src="../assets/logo.svg" alt="" />
      </div>
    </aside>
    <header class=" w-full h-fit flex justify-between">
      <h1>Welcome back Ulvy</h1>
      <div class="flex">
        <IconSetting/>
      </div>
    </header>
  </section>
</template>

<script setup lang="ts">
import IconSetting from '@/components/icons/IconSetting.vue';

</script>