<script lang="ts" setup>
import { useProductStore } from "../store/index";

const store = useProductStore();
const removeFromWishlist = (product: number) => store.removeFromWishlist(product);

</script>
<template>
    <div class="container-sm cart">
        <div class="d-flex align-items-start flex-column">
            <h1>WishList Page</h1>
            <div v-if="store.wishlist.length === 0">
                <p>Your wishlist is empty.</p>
            </div>
            <div v-for="product in store.wishlist" :key="product.id">
                <div class="card card-body">
                    <h3>{{ product.name }}</h3>
                    <div>Price: ${{ product.price }}</div>
                    <button @click="removeFromWishlist(product.id)">Remove</button>
                </div>
            </div>
        </div>

    </div>

</template>

<style></style>