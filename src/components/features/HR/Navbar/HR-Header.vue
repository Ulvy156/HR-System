<template>
  <h1 class="text-3xl">Welcome back Ulvy</h1>
  <section>
    <div class="flex items-center gap-x-5 action-icons">
      <IconSetting />
      <IconMessage />
      <IconNotification />
      <n-dropdown :options="options" trigger="hover">
        <n-avatar round lazy size="large"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84d5FdTdG_YP6i1YilUnaHNZzp-rtfOw5SWHnDLEAaI6iQSdxfO5KIZRmWt4thwJCPdL4sUOIIqMksWdIoQJDBEp48JZVRju6ZZUACfDyYw" />
      </n-dropdown>
    </div>
  </section>
</template>

<script setup lang="ts">
//vue
import { defineAsyncComponent, markRaw } from 'vue';
// utils
import { renderIcon } from '@/utils/useRenderIcon'
// icons
const IconSingleUser = markRaw(defineAsyncComponent(() => import('@/components/icons/IconSingleUser.vue')))
import {
  IconSetting,
  IconMessage,
  IconNotification,
} from '@/components/icons';

//properties
const options = [
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(IconSingleUser)
  },
  {
    label: 'Edit Profile',
    key: 'editProfile',
    icon: renderIcon(IconSingleUser)
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(IconSingleUser)
  },
]
</script>
