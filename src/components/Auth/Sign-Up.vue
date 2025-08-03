<template>
  <section class="grid grid-cols-1 gap-5">
    <div class="grid grid-cols-1">
      <p>Email:</p>
      <BaseInput
        placeholder="Enter your email"
        type="email"
        status="default"
        v-model="formData.email"
      />
    </div>
    <div class="grid grid-cols-1 ">
      <p>Password:</p>
      <BaseInput
        v-model="formData.password"
        placeholder="Enter your password"
        show-password-on="click"
        type="password"
      />
    </div>
    <div class="grid grid-cols-1 ">
      <p>Confirm Password:</p>
      <BaseInput
        v-model="formData.confirmPassword"
        placeholder="Confirm your password"
        show-password-on="click"
        type="password"
      />
    </div>
    <button type="submit">Sign Up</button>
  </section>
</template>

<script setup lang="ts">
//component
import { ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';

//properties
const formData = ref({
  email: '',
  password: '',
  confirmPassword: ''
})


</script>
