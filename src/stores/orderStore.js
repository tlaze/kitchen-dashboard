import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const activeOrders = ref([])
  const completedOrders = ref([])

  function addOrder(order) {
    activeOrders.value.push(order)
  }

  function markOrderReady(orderId) {
    const order = activeOrders.value.find((o) => o.id === orderId)
    if (order) order.status = 'ready'
  }

  function completeOrder(orderId) {
    const index = activeOrders.value.findIndex((o) => o.id === orderId)
    if (index !== -1) {
      const [order] = activeOrders.value.splice(index, 1)
      order.completedAt = new Date()
      completedOrders.value.push(order)
    }
  }

  return {
    activeOrders,
    completedOrders,
    addOrder,
    markOrderReady,
    completeOrder,
  }
})
