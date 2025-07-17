<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
      <h1 class="text-3xl font-bold">Kitchen Dashboard</h1>
      <div class="flex flex-col sm:flex-row gap-2">
        <router-link
          to="/analytics"
          class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-center"
        >
          View Analytics
        </router-link>
        <router-link
          to="/completed"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center"
        >
          View Completed Orders
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="order in orderStore.activeOrders"
        :key="order.id"
        :class="[
          'rounded-lg p-4 shadow-md border transition-all',
          order.status === 'ready'
            ? 'bg-green-100 border-green-300'
            : 'bg-yellow-100 border-yellow-300 animate-pulse',
        ]"
      >
        <h2 class="text-xl font-semibold mb-2">Order #{{ order.id }}</h2>
        <p class="text-sm text-gray-500 mb-2">Placed at: {{ formatTime(order.createdAt) }}</p>
        <ul class="mb-4">
          <li v-for="item in order.items" :key="item" class="text-gray-700">• {{ item }}</li>
        </ul>
        <div class="flex justify-between gap-2">
          <button
            @click="markReady(order.id)"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
          >
            Mark Ready
          </button>
          <button
            @click="removeOrder(order.id)"
            class="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useOrderStore } from '/src/stores/orderStore'
import { onMounted } from 'vue'
import { socket } from '../socket'

const orderStore = useOrderStore()

socket.on('new-order', (order) => {
  orderStore.addOrder(order)
})

function markReady(orderId) {
  orderStore.markOrderReady(orderId)
}

function removeOrder(orderId) {
  orderStore.completeOrder(orderId)
}
function formatTime(iso) {
  const date = new Date(iso)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
</script>
