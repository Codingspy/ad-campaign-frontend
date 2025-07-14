<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../axios'

const email = ref('')
const password = ref('')
const message = ref('')

const login = async () => {
  try {
    const response = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    })
    message.value = response.data
  } catch (error) {
    message.value = 'Login failed.'
  }
}
</script>
