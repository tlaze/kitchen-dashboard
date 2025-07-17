<template>
  <div class="min-h-screen bg-white p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Completed Orders</h1>
      <router-link to="/" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Back to Kitchen
      </router-link>
    </div>

    <div v-if="completed.length === 0" class="text-gray-500 text-lg">No completed orders yet.</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="order in completed"
        :key="order.id"
        class="rounded-lg shadow-md p-4 bg-green-100 border border-green-300"
      >
        <h2 class="text-xl font-semibold mb-2">Order #{{ order.id }}</h2>
        <ul>
          <li v-for="item in order.items" :key="item" class="text-gray-700">• {{ item }}</li>
        </ul>
        <p class="text-xs text-gray-500 mt-2">
          Completed at: {{ new Date(order.completedAt).toLocaleTimeString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '/src/stores/orderStore'

const { completedOrders: completed } = useOrderStore()
</script>
