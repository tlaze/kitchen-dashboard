<template>
  <div class="min-h-screen bg-white p-6">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
      <h1 class="text-3xl font-bold">Completed Orders</h1>
      <router-link
        to="/analytics"
        class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-center"
      >
        View Analytics
      </router-link>
      <router-link
        to="/"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center w-full sm:w-auto"
      >
        Back to Kitchen
      </router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="order in [...orderStore.completedOrders].reverse()"
        :key="order.id"
        class="bg-red-300 border border-red-800 rounded-lg p-4 shadow"
      >
        <h2 class="text-xl font-semibold mb-2">Order #{{ order.id }}</h2>
        <ul class="mb-2">
          <li v-for="item in order.items" :key="item">• {{ item }}</li>
        </ul>
        <p class="text-sm text-white mb-4">
          Completed at: {{ new Date(order.completedAt).toLocaleTimeString() }}
        </p>
        <button
          @click="orderStore.reopenOrder(order.id)"
          class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
        >
          Send Back to Kitchen
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '/src/stores/orderStore'
const orderStore = useOrderStore()
</script>
