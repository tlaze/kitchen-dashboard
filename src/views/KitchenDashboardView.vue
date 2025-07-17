<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Kitchen Dashboard</h1>
      <router-link
        to="/completed"
        class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
      >
        View Completed Orders
      </router-link>
    </div>

    <!-- Your existing grid for active orders -->
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
            class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded"
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
</script>
