# 🍳 Kitchen Dashboard – POS Order Management

This is the **Kitchen Dashboard** portion of a mock omnichannel ordering system. It receives real-time food orders from a self-service kiosk and displays them for kitchen staff to prepare and manage efficiently.

## 🚀 Features

- ⚡ Real-time order updates via WebSocket
- 📋 Display of all pending and completed orders
- 🔁 Ability to mark orders as completed or return them to the kitchen
- 🕒 Timestamp tracking for order prep times
- 📊 Analytics view for top-selling menu items (using Chart.js)
- 📱 Responsive design with Tailwind CSS
- 🧪 End-to-end testing with Cypress

## 📸 Screenshots

| Kitchen View                                         | Completed Orders                                      | Analytics                                      |
| ---------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| ![Kitchen](/src/assets/images/kitchen-dashboard.png) | ![Completed](/src/assets/images/completed-orders.png) | ![Analytics](/src/assets/images/analytics.png) |

## 📦 Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API
- [Pinia](https://pinia.vuejs.org/) for state management
- [Socket.IO Client](https://socket.io/)
- [Chart.js](https://www.chartjs.org/) for analytics
- [Tailwind CSS](https://tailwindcss.com/) for UI
- [Cypress](https://www.cypress.io/) for end-to-end testing

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kitchen-dashboard.git
   cd kitchen-dashboard
   ```
