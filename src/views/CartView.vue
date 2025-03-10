<script lang="ts" setup>
import { computed } from "vue";
import { useProductStore } from "../store/index";
import { ProductType } from "@/types/productType";

const store = useProductStore();
const addToCart = (product: ProductType) => store.addToCart(product);
const removeFromCart = (productId: number) => store.removeFromCart(productId);
const deleteFromCart = (productId: number) => store.deleteFromCart(productId);

const totalPrice = computed(() => {
    return store.cart.reduce((total: number, item: ProductType) => total + item.price * item.quantity, 0);
});
</script>

<template>
    <div class="container-sm cart">
        <div class="d-flex align-items-start flex-column">
            <h1>Your Cart</h1>
            <div v-for="product in store.cart">
                <div class="card card-body">
                    <h3>{{ product.name }}</h3>
                    <div>Price: ${{ product.price }}</div>
                    <div class="d-flex gap-2">
                        <div>
                            <button @click="addToCart(product)">+</button> {{ product.quantity }}
                            <button @click="removeFromCart(product.id)">-</button>
                        </div>
                        <button @click="deleteFromCart(product.id)">Remove</button>
                    </div>
                </div>
            </div>
            <div class="bg-warning p-4 text-success h2"> Total Price : {{ totalPrice }}</div>
        </div>

    </div>
</template>

<style>
.cart div {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
</style>