<template>
  <h1>Ad Campaign MVP</h1>
  <RegisterForm />
  <LoginForm />

  <div v-if="isLoggedIn">
    <CampaignForm />
    <CampaignList />
    <Dashboard />
  </div>
</template>

<script setup>
import RegisterForm from './components/RegisterForm.vue'
import LoginForm from './components/LoginForm.vue'
import CampaignForm from './components/CampaignForm.vue'
import CampaignList from './components/CampaignList.vue'
import Dashboard from './components/Dashboard.vue'

const isLoggedIn = localStorage.getItem('token') !== null
</script>
