<template>
  <div>
    <h2>Campaigns</h2>
    <ul>
      <li v-for="c in campaigns" :key="c.id">
        {{ c.title }} — ₹{{ c.budget }}<br/>
        Impressions: {{ c.impressions }} | Clicks: {{ c.clicks }}<br/>
        <button @click="addImpression(c.id)">Add Impression</button>
        <button @click="addClick(c.id)">Add Click</button>
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

const addImpression = async (id) => {
  await axios.post(`/adcampaigns/${id}/impression`)
  fetchCampaigns()
}

const addClick = async (id) => {
  await axios.post(`/adcampaigns/${id}/click`)
  fetchCampaigns()
}

onMounted(fetchCampaigns)
</script>
