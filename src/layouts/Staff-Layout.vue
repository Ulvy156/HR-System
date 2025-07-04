<template>
  <MainLayout>
    <template #aside>
      <img src="../assets/logo.svg" alt="" />
      <section class="section-dashboard">
        <!-- dashboard -->
        <div class="child-section" id="dashboard" @click="toggleClassName('dashboard')">
          <h2>Dashboard</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
            />
          </svg>
        </div>
        <!-- employee -->
        <!-- <CommonCollapse class="child-section">
          <template #title>
            <h2>Employee</h2>
          </template>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
              />
            </svg>
          </div>
        </CommonCollapse> -->
        <CommonCollapse/>
      </section>
    </template>
    <template #header>
      <h1 class="text-3xl">Welcome back Ulvy</h1>
      <section>
        <div class="flex items-center gap-x-5 action-icons">
          <IconSetting />
          <BaseBadge>
            <IconMessage />
          </BaseBadge>
          <BaseBadge>
            <IconNotification />
          </BaseBadge>
          <el-avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84d5FdTdG_YP6i1YilUnaHNZzp-rtfOw5SWHnDLEAaI6iQSdxfO5KIZRmWt4thwJCPdL4sUOIIqMksWdIoQJDBEp48JZVRju6ZZUACfDyYw"
          />
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
//layout
import MainLayout from './MainLayout.vue'
//base
import BaseBadge from '@/components/base/BaseBadge.vue'
import CommonCollapse from '@/components/common/CommonCollapse.vue'
//utils
import { toggleClassName } from '@/utils/useActiveClass'
//properties

import IconSetting from '@/components/icons/IconSetting.vue'
import IconMessage from '@/components/icons/IconMessage.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
</script>

<style scoped></style>
