<template>
  <div>
    <h2>Campaign Dashboard</h2>
    <canvas id="campaignChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../axios'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const campaigns = ref([])

const fetchData = async () => {
  const res = await axios.get('/adcampaigns/my')
  campaigns.value = res.data

  drawChart()
}

const drawChart = () => {
  const ctx = document.getElementById('campaignChart').getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: campaigns.value.map(c => c.title),
      datasets: [
        {
          label: 'Impressions',
          data: campaigns.value.map(c => c.impressions),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
          label: 'Clicks',
          data: campaigns.value.map(c => c.clicks),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Campaign Performance' }
      }
    }
  })
}

onMounted(fetchData)
</script>
