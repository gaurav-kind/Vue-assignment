<script lang="ts" setup>
import { ref } from "vue";
import CartIcons from '../assets/icons/CartIcons.vue';
import HeartIcons from '../assets/icons/HeartIcons.vue';
import LogoutIcons from '../assets/icons/LogoutIcons.vue';
import { useProductStore } from "../store/index";

const store = useProductStore();

const products = ref([
  { id: 1, name: "Wireless Earbuds", description: "Bluetooth earbuds", price: 2999 },
  { id: 2, name: "Smartphone", description: "128GB storage, 5000mAh battery", price: 19999 },
  { id: 3, name: "Gaming Laptop", description: "16GB RAM, 512GB SSD", price: 75999 },
]);

const addToCart = (product: any) => store.addToCart(product);
const addToWishlist = (product: any) => store.addToWishlist(product);

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
        <router-link to="/signup">
          <LogoutIcons />
        </router-link>

      </div>
    </nav>
  </div>
  <div v-for="product in products" :key="product.id" class="d-flex flex-wrap gap-3 container mx-auto">
    
    <div class="card" style="width: 18rem;">
      <img src="./../assets/images.jpeg" class="card-img-top" style="height: 200px;" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary">Add to cart</button>
          <button type="button" class="btn btn-outline-danger">Add to wishlist</button>
        </div>

      </div>
    </div>

  </div>
</template>
