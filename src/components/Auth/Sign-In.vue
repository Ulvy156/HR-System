<template>
  <section class="grid grid-cols-1 gap-5 ">
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
    <div class="flex justify-between">
      <BaseButton
      @click="handleSignIn"
      type="info"
      :ghost="true">
        Sign In
      </BaseButton>
      <a href="">Forgot password?</a>
    </div>
  </section>
</template>

<script setup lang="ts">
//api
import authAPI from '@/services/auth-service';
//utils

//component
import { ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';
import BaseButton from '../base/BaseButton.vue';
import { setCookie } from '@/utils/useCookies';

//properties
const formData = ref({
  email: '',
  password: ''
})

//methods
async function handleSignIn() {
  await authAPI.post('/auth/login', formData.value)
    .then((response) => {
      const access_token = response.data.access_token;
      setCookie('access_token', access_token.token, {
        maxAgeSeconds: access_token.expires_in
      });
      console.log(response);

    })
    .catch((error) => {
      console.error('Sign in failed:', error);
      // Handle sign-in failure (e.g., show error message)
    });
}
</script>
