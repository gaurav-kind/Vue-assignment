<script setup>
import router from '@/router';
import { ref } from 'vue';

const username = ref("")
const password = ref("")

const onLogin = () => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  for (var user of existingUsers) {
    if (user.username == username.value && user.password == password.value) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      router.push({ path: '/' })
      return
    }
  }
  alert("Wrong Credentials")
}
</script>

<template>
  <h1>Login Page</h1>
  <div class="signup">
    <input v-model="username" class="form-control" type="text" placeholder="username" />
    <input v-model="password" class="form-control" type="text" placeholder="password" />
    <button @click="onLogin" class="btn btn-success w-100">Login</button>
    <div class="d-flex justify-content-end">
      <router-link to="signup" tag="div">signup</router-link>
    </div>
  </div>

</template>

<style>
.signup {
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>