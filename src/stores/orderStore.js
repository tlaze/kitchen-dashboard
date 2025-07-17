import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore(
  'order',
  () => {
    const activeOrders = ref([])
    const completedOrders = ref([])

    function addOrder(order) {
      const exists = activeOrders.value.some((o) => o.id === order.id)
      if (!exists) {
        activeOrders.value.push(order)
      }
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

    function reopenOrder(orderId) {
      const index = completedOrders.value.findIndex((o) => o.id === orderId)
      if (index !== -1) {
        const [order] = completedOrders.value.splice(index, 1)
        order.status = 'pending' // reset status if needed
        activeOrders.value.push(order)
      }
    }

    return {
      activeOrders,
      completedOrders,
      addOrder,
      markOrderReady,
      completeOrder,
      reopenOrder,
    }
  },
  {
    persist: true,
  },
)
