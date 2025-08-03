<template>
  <form class="grid grid-cols-1 justify-center items-center h-screen ">
    <div class="lg:w-1/2 md:w-[70%] m-auto shadow-md p-5 rounded-md grid grid-cols-1 gap-5">
      <div class="grid  grid-cols-2 gap-x-5 w-full">
          <BaseButton
          :ghost="currentComponentName !== 'sign-in'"
          @click="setCurrentComponent('sign-in')"
          type="info">
            Sign In
          </BaseButton>
          <BaseButton
          :ghost="currentComponentName !== 'sign-up'"
          @click="setCurrentComponent('sign-up')"
          type="info">
            Sign Up
          </BaseButton>
      </div>
      <h1 class="text-center text-xl">Welcome Back!</h1>
      <Transition name="slide-fade" mode="out-in">
        <component :is="currentComponent" :key="currentComponentName"/>
      </Transition>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
//interface
type ComponentName = 'sign-in' | 'sign-up';
//components
import BaseButton from '../base/BaseButton.vue';
const signIn = defineAsyncComponent(() => import("@/components/Auth/Sign-In.vue"));
const signUp = defineAsyncComponent(() => import("@/components/Auth/Sign-Up.vue"));

//properties
const currentComponentName = ref<ComponentName>('sign-in');

//methods
function setCurrentComponent(params: ComponentName) {
  currentComponentName.value = params;
}
//computed
const currentComponent = computed(() => {
  return currentComponentName.value === 'sign-in' ? signIn : signUp;
})

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
