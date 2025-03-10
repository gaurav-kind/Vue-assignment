<script lang="ts" setup>
import { useProductStore } from "@/store";
import { ProductType } from "@/types/productType";


defineProps<{
    product: ProductType;
}>();

const store = useProductStore();

const addToCart = (product: ProductType) => store.addToCart(product);
const addToWishlist = (product: ProductType) => store.addToWishlist(product);
const removeFromWishlist = (productId: number) => store.removeFromWishlist(productId);
const itemInWishList = (product: ProductType) => store.wishlist.some((item: any) => item.id == product.id)

</script>


<template>
    <div class="card" style="width: 20rem;">
        <img src="./../assets/images.jpeg" class="card-img-top" style="height: 200px;" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between">
                <button @click="addToCart(product)" type="button" class="btn btn-primary">Add to cart</button>
                <button v-if="!itemInWishList(product)" @click="addToWishlist(product)" type="button"
                    class="btn btn-outline-danger">Add to
                    wishlist</button>
                <button v-if="itemInWishList(product)" @click="removeFromWishlist(product.id)" type="button"
                    class="btn btn-outline-danger">Remove to
                    wishlist</button>
            </div>
        </div>
    </div>
</template>