// store.js (Using Pinia)
import { defineStore } from "pinia";
import { ProductType } from "@/types/productType";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    cart: [] as ProductType[],
    wishlist: [] as ProductType[],
  }),
  actions: {
    addToCart(product: any) {
      const existing = this.cart.find((item: ProductType) => item.id === product.id);
      if (!existing) {
        this.cart.push({ ...product, quantity: 1 });
      } else {
        existing.quantity++;
      }
    },
    removeFromCart(productId: any) {
      const item = this.cart.find((item: ProductType) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.cart = this.cart.filter((item: ProductType) => item.id !== productId);
      }
    },
    deleteFromCart(productId: number) {
      this.cart = this.cart.filter((item: ProductType) => item.id !== productId);
    },
    addToWishlist(product: ProductType) {
      if (!this.wishlist.find((item: ProductType) => item.id === product.id)) {
        this.wishlist.push(product);
      }
    },
    removeFromWishlist(productId: number) {
      this.wishlist = this.wishlist.filter((item: ProductType) => item.id !== productId);
    }
  },
});
