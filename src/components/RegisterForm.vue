<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
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

const register = async () => {
  try {
    const response = await axios.post('/auth/register', {
      email: email.value,
      password: password.value
    },{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    message.value = response.data
  } catch (error) {
    message.value = 'Registration failed.'
  }
}
</script>
