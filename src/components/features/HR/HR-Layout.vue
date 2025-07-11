<template>
  <MainLayout>
    <template #aside>
      <section class="section-dashboard dark:bg-blue-400 flex flex-col gap-y-3">
        <!-- navbar -->
        <CommonCollapse
          :closeCollapse="item.isCollapseActive"
          :collapseTitle="item.name + item.router"
          v-for="item in routerList"
          :key="item.name"
          @click="getPreviousActive(item.name + item.router)"
        >
          <template #title>
            <h2 class="line-clamp-1">{{ item.name }}</h2>
          </template>
          <template #icon>
            <component :is="item.icon" class="size-5" />
          </template>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
              />
            </svg>
          </div>
          <template v-if="item.ul.length > 0" #body>
            <ul class="text-black bg-none p-3 px-5 flex flex-col gap-y-4">
              <li
                @click="getPreviousIdLI(subItem.name)"
                v-for="subItem in item.ul"
                :key="subItem.name"
                :id="subItem.name"
                class="flex items-center gap-x-5"
              >
                <component :is="subItem.icon" class="size-5" />
                <RouterLink to="/">{{ subItem.name }} </RouterLink>
              </li>
            </ul>
          </template>
        </CommonCollapse>
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
          <n-dropdown :options="options" trigger="hover">
            <n-avatar
              round
              lazy
              size="large"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84d5FdTdG_YP6i1YilUnaHNZzp-rtfOw5SWHnDLEAaI6iQSdxfO5KIZRmWt4thwJCPdL4sUOIIqMksWdIoQJDBEp48JZVRju6ZZUACfDyYw"
            />
          </n-dropdown>
        </div>
      </section>
    </template>
    <!-- main content -->
     <template #main>
       <main >
        hi
       </main>
     </template>
  </MainLayout>
</template>

<script setup lang="ts">
//vue
import { defineAsyncComponent, markRaw, ref } from 'vue'

//layout
import MainLayout from '@/layouts/MainLayout.vue'
//base
import BaseBadge from '@/components/base/BaseBadge.vue'
import CommonCollapse from '@/components/common/CommonCollapse.vue'
//utils
import { addClassName, removeClassName, toggleClassName } from '@/utils/useActiveClass'
import { renderIcon } from '@/utils/useRenderIcon'
// Icons
const IconClipboard = markRaw(
  defineAsyncComponent(() => import('@/components/icons/IconClipboard.vue')),
)
const IconLeave = markRaw(defineAsyncComponent(() => import('@/components/icons/IconLeave.vue')))
const IconCandidate = markRaw(
  defineAsyncComponent(() => import('@/components/icons/IconCandidate.vue')),
)
const IconCV = markRaw(defineAsyncComponent(() => import('@/components/icons/IconCV.vue')))
const IconSingleUser = markRaw(defineAsyncComponent(() => import('@/components/icons/IconSingleUser.vue')))
const IconTraining = markRaw(defineAsyncComponent(()=> import('@/components/icons/IconTraining.vue')))
const IconPayroll = markRaw(defineAsyncComponent(() => import('@/components/icons/IconPayroll.vue')))
const IconBenefit = markRaw(defineAsyncComponent(() => import('@/components/icons/IconBenefit.vue')))
import {
  IconArrow,
  IconSetting,
  IconMessage,
  IconNotification,
  IconEmployee,
  IconRecruitment,
  IconDollar
} from '@/components/icons'


// properties
const previousID = ref<string>('')
const previousIdLi = ref<string>('')
//functions
function getPreviousActive(id: string) {
  autoCloseCollapse(id)
  //remove class from previous element
  removeClassName(previousID.value, 'active-bg')
  //add new class to new item
  addClassName(id, 'active-bg')
  previousID.value = id
}
function getPreviousIdLI(id: string) {
  //remove class from previous element
  toggleClassName(previousIdLi.value, 'active-li')
  //add new class to new item
  toggleClassName(id, 'active-li')
  previousIdLi.value = id
}
function autoCloseCollapse(id: string) {
  routerList.value.forEach((item) => {
    const colID = item.name + item.router
    if (colID !== id) {
      item.isCollapseActive = false
    } else {
      item.isCollapseActive = true
    }
  })
}

//properties
const routerList = ref([
  {
    name: 'DashBoard',
    icon: markRaw(IconArrow),
    router: '/',
    isCollapseActive: true,
    ul: [],
  },
  {
    name: 'Employee',
    icon: markRaw(IconEmployee),
    router: '/employee',
    isCollapseActive: true,
    ul: [
      {
        name: 'Attendance',
        router: '/attendance',
        icon: markRaw(IconClipboard),
      },
      {
        name: 'Leave Request',
        router: '/leave-request',
        icon: markRaw(IconLeave),
      },
      {
        name: 'Employee Directory',
        router: '/attendance',
        icon: markRaw(IconClipboard),
      },
    ],
  },
  {
    name: 'Recruitment',
    icon: markRaw(IconRecruitment),
    router: '/',
    isCollapseActive: false,
    ul: [
      {
        name: 'Application',
        router: '/',
        icon: markRaw(IconCV),
      },
      {
        name: 'Interview',
        router: '/',
        icon: markRaw(IconCandidate),
      },
    ],
  },
  {
    name: 'Payroll',
    icon: markRaw(IconDollar),
    router: '/',
    isCollapseActive: false,
    ul: [
      {
        name: 'Payroll Information',
        router: '/',
        icon: markRaw(IconPayroll),
      },
      {
        name: 'Benefits Overview',
        router: '/',
        icon: markRaw(IconBenefit),
      },
    ],
  },
  {
    name: 'Training  & Development',
    icon: markRaw(IconTraining),
    router: '/',
    isCollapseActive: false,
    ul: [
      {
        name: 'Payroll Information',
        router: '/',
        icon: markRaw(IconCV),
      },
      {
        name: 'Benefits Overview',
        router: '/',
        icon: markRaw(IconCandidate),
      },
    ],
  },
])
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

<style scoped>
ul > li:hover {
  color: var(--navbar-hover-color);
}
.active-li {
  color: var(--navbar-hover-color);
}
</style>
