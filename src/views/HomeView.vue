<script lang="ts" setup>
import Product from "@/components/Product.vue";
import { ref } from "vue";
import CartIcons from '../assets/icons/CartIcons.vue';
import HeartIcons from '../assets/icons/HeartIcons.vue';
import LogoutIcons from '../assets/icons/LogoutIcons.vue';
import router from "@/router";
const products = ref([
  { id: 1, name: "Wireless Earbuds", description: "Bluetooth earbuds", price: 999, quantity:0 },
  { id: 2, name: "Smartphone", description: "128GB storage, 5000mAh battery", price: 100 , quantity:0},
  { id: 3, name: "Gaming Laptop", description: "16GB RAM, 512GB SSD", price: 500 , quantity:0},
]);

const onLogout = () => {
  localStorage.removeItem('loggedInUser');
  router.push({ path: '/login' })
}

</script>

<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg bg-body-tertiary container d-flex justify-content-between">
      <router-link to="/">Home</router-link>
      <div class="d-flex gap-3">
        <router-link to="/cart">
          <CartIcons />
        </router-link>
        <router-link to="/wishlist">
          <HeartIcons />
        </router-link>
        <div role="button" @click="onLogout">
          <LogoutIcons />
        </div>
      </div>
    </nav>
  </div>
  <div class="container mx-auto d-flex flex-wrap gap-3">
    <div v-for="product in products" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>
