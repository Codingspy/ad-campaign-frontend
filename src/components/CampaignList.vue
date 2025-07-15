<template>
  <div>
    <h2>Campaigns</h2>
    <ul>
      <li v-for="c in campaigns" :key="c.id">
        {{ c.title }} — ₹{{ c.budget }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../axios'

const campaigns = ref([])

const fetchCampaigns = async () => {
  const res = await axios.get('/adcampaigns')
  campaigns.value = res.data
}

onMounted(fetchCampaigns)
</script>
