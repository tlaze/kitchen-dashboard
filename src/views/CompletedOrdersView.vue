<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Completed Orders</h1>

    <div v-if="completedOrders.length" class="space-y-4">
      <div
        v-for="order in completedOrders"
        :key="order.id"
        class="bg-gray-100 border rounded-lg p-4"
      >
        <h2 class="text-lg font-semibold">Order #{{ order.id }}</h2>
        <ul class="text-sm list-disc list-inside mb-2">
          <li v-for="(item, index) in order.items" :key="index">{{ item }}</li>
        </ul>
        <p class="text-xs text-gray-500">Completed at: {{ formatDate(order.completedAt) }}</p>
      </div>
    </div>
    <p v-else class="text-gray-500">No completed orders yet.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// In a real app, you’d share this state via Pinia or WebSocket sync
const completedOrders = ref([])

function formatDate(date) {
  return new Date(date).toLocaleString()
}
</script>
