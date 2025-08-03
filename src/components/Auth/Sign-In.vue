<template>
  <section class="grid grid-cols-1 gap-5 ">
    <div class="grid grid-cols-1">
      <p :class="inputStatus.email">Email:</p>
      <BaseInput
        :status="inputStatus.email"
        placeholder="Enter your email"
        type="email"
        v-model="formData.email"
      />
    </div>
    <div class="grid grid-cols-1 ">
      <p :class="inputStatus.password">Password:</p>
      <BaseInput
        :status="inputStatus.password"
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
      <span class="underline text-blue-800 cursor-pointer">forgot password?</span>
    </div>
  </section>
</template>

<script setup lang="ts">
//api
import authAPI from '@/services/auth-service';
//utils

//component
import { computed, ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';
import BaseButton from '../base/BaseButton.vue';
import { setCookie } from '@/utils/useCookies';
import type { InputStatus } from '@/types/InputType';

//properties
const formData = ref({
  email: '',
  password: ''
})
const validateForm = ref({
  is_email_invalid: false,
  is_password_invalid: false
});
//methods
async function handleSignIn() {
  // Validate form data before sending
  checkValidation();
  if (!isValidData.value) {
    console.error('Invalid data');
    return;
  }
  // Send sign-in request
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
function checkValidation() {
  if(formData.value.password.trim().length < 8) {
    validateForm.value.is_password_invalid = true;
  }
  else {
    validateForm.value.is_password_invalid = false;
  }
  if (formData.value.email.trim().length === 0) {
    validateForm.value.is_email_invalid = true;
  }
  else {
    validateForm.value.is_email_invalid = false;
  }
}

//computed
const inputStatus = computed(() => {
  return {
    email: validateForm.value.is_email_invalid ? 'error' : 'default' as InputStatus,
    password: validateForm.value.is_password_invalid ? 'error' : 'default' as InputStatus
  };
});
const isValidData = computed(() => {
  return validateForm.value.is_email_invalid && validateForm.value.is_password_invalid;
});
</script>

<style scoped>
.default {
  color: black;
}
.error {
  color: red;
}
</style>
