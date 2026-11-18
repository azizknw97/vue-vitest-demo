
<template>
  <div class="cart">
    <h1>Keranjang Belanja</h1>

    <p>Harga barang: Rp10.000</p>

    <div class="quantity">
      <button @click="decrement">-</button>

      <span data-testid="quantity">
        {{ quantity }}
      </span>

      <button @click="increment">+</button>
    </div>

    <h2 data-testid="total">
      Total: Rp{{ total }}
    </h2>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const price = 10000
const quantity = ref(0)

const total = computed(() => {
  return price * quantity.value
})

function increment() {
  quantity.value++
}

function decrement() {
  if (quantity.value > 0) {
    quantity.value--
  }
}
</script>

<style scoped>
.cart {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
