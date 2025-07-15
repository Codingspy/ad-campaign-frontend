<template>
  <div>
    <h2>Create Campaign</h2>
    <form @submit.prevent="create">
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="description" placeholder="Description"></textarea>
      <input v-model.number="budget" type="number" placeholder="Budget" required />
      <button type="submit">Create</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../axios'

const title = ref('')
const description = ref('')
const budget = ref(0)
const message = ref('')

const create = async () => {
  try {
    const response = await axios.post('/adcampaigns', {
      title: title.value,
      description: description.value,
      budget: budget.value
    })
    message.value = 'Created!'
  } catch (err) {
    message.value = 'Failed to create.'
  }
}
</script>
