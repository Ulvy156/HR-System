<template>
  <MainLayout>
    <template #aside>
      <HRSidebar/>
    </template>
    <template #header>
      <HRHeader/>
    </template>
    <!-- main content -->
     <template #main>
        <DashBoard/>
     </template>
  </MainLayout>
</template>

<script setup lang="ts">
// component
import DashBoard from './HR-DashBoard.vue'
import HRSidebar from './Navbar/HR-Sidebar.vue'
import HRHeader from './Navbar/HR-Header.vue'

//layout
import MainLayout from '@/layouts/MainLayout.vue'

</script>


