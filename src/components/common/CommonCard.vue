<template>
  <article class="flex flex-col gap-3 border w-full border-gray-300 rounded-md p-5">
    <div class="flex justify-between items-center">
      <IconBenefit class="border border-gray-200 p-2 rounded-md text-[var(--navbar-hover-color)] "/>
      <div class="flex gap-x-1 text-[15px]">
        <p class="text-green-700 font-semibold">
          <slot name="percentage">10%</slot>
        </p>
        <!-- force all slotted content to inherit current size -->
        <p class="text-gray-600">
          <span>
            <slot name="month">vs last month</slot>
          </span>
        </p>
      </div>
    </div>
    <h3 class="text-[15px]">
      <span>
        <slot name="title">Total Workforce</slot>
      </span>
    </h3>
    <h3 class="text-2xl font-semibold">
      <span>
        <slot name="total">150</slot>
      </span>
    </h3>
  </article>
</template>

<script lang="ts" setup>
import IconBenefit from '../icons/IconBenefit.vue';
</script>

<style scoped>
span {
  color: inherit;
}
</style>
