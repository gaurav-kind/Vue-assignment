<script setup>
import router from '@/router';
import { ref } from 'vue';

const username = ref("")
const password = ref("")
const errorMessage = ref("")

const validatePassword = () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value);

const onSignup = () => {
  if (!validatePassword()) {
    errorMessage.value = 'Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 digit';
    return;
  }
  errorMessage.value = ""
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push({
    username: username.value,
    password: password.value,
  });
  localStorage.setItem('users', JSON.stringify(existingUsers));
  username.value = ""
  password.value = ""
  alert('Signup successful!');
  router.push({ path: 'login' })
}
</script>

<template>
  <h1>Signup Page</h1>
  <div class="signup">
    <input class="form-control" type="text" placeholder="username" v-model="username" />
    <input class="form-control" type="text" placeholder="password" v-model="password" />
    <button @click="onSignup" class="btn btn-success w-100">Sign Up</button>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    <div class="d-flex justify-content-end">
      <router-link to="login" tag="div">login</router-link>
    </div>
  </div>

</template>
