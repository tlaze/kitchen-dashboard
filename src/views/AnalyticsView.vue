<template>
  <div class="min-h-screen bg-white p-6">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
      <h1 class="text-3xl font-bold">Order Analytics</h1>
      <router-link
        to="/"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center w-full sm:w-auto"
      >
        Back to Kitchen
      </router-link>
    </div>

    <BarChart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useOrderStore } from '../stores/orderStore'
import BarChart from '../components/BarChart.vue'

const orderStore = useOrderStore()

// Count each item ordered
const itemCounts = computed(() => {
  const counts = {}
  orderStore.completedOrders.forEach((order) => {
    order.items.forEach((item) => {
      const [name, qtyStr] = item.split(' x')
      const quantity = parseInt(qtyStr) || 1
      counts[name] = (counts[name] || 0) + quantity
    })
  })
  return counts
})

const chartData = computed(() => ({
  labels: Object.keys(itemCounts.value),
  datasets: [
    {
      label: 'Orders',
      data: Object.values(itemCounts.value),
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: 'Most Ordered Items' },
  },
  scales: {
    y: { beginAtZero: true },
  },
}
</script>
