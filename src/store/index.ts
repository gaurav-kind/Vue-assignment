// store.js (Using Pinia)
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    cart:<any> [],
    wishlist:<any> [],
  }),
  actions: {
    addToCart(product: any) {
      const existing = this.cart.find((item: any) => item.id === product.id);
      if (!existing) {
        this.cart.push({ ...product, quantity: 1 });
      } else {
        existing.quantity++;
      }
    },
    removeFromCart(productId: any) {
      this.cart = this.cart.filter((item: any) => item.id !== productId);
    },
    addToWishlist(product: any) {
      if (!this.wishlist.find((item: any) => item.id === product.id)) {
        this.wishlist.push(product);
      }
    },
    removeFromWishlist(productId: any) {
      this.wishlist = this.wishlist.filter((item: any) => item.id !== productId);
    },
  },
});
