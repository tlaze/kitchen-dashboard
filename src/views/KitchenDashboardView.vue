<script setup>
import { ref } from 'vue'

const activeOrders = ref([
  { id: 101, items: ['Burger', 'Fries'], status: 'new' },
  { id: 102, items: ['Soda'], status: 'new' },
])

const completedOrders = ref([])

function markReady(order) {
  order.status = 'ready'
}

function removeOrder(orderId) {
  const index = activeOrders.value.findIndex((order) => order.id === orderId)
  if (index !== -1) {
    const [removedOrder] = activeOrders.value.splice(index, 1)
    removedOrder.completedAt = new Date()
    completedOrders.value.push(removedOrder)
  }
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Kitchen Dashboard</h1>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="order in activeOrders"
        :key="order.id"
        :class="[
          'rounded-lg p-4 border transition-all shadow',
          order.status === 'new'
            ? 'bg-yellow-100 animate-pulse'
            : order.status === 'ready'
              ? 'bg-green-200'
              : 'bg-white',
        ]"
      >
        <h2 class="text-lg font-semibold mb-2">Order #{{ order.id }}</h2>
        <ul class="text-sm mb-4 list-disc list-inside">
          <li v-for="(item, index) in order.items" :key="index">{{ item }}</li>
        </ul>

        <div class="flex gap-2">
          <button
            v-if="order.status === 'new'"
            @click="markReady(order)"
            class="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Mark Ready
          </button>

          <button
            @click="removeOrder(order.id)"
            class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
