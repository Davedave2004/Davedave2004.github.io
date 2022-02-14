export default {
    methods: {
        addToCart(product, quantity = 1) {
            this.$store.commit('addItemsToCart', { itemId: product.id, quantity });
            this.$store.commit('updateSnackbar', { show: true, message: 'Success! Item added to the cart.' })
        },
        removeFromCart: function (item) {
            this.$store.commit('removeItemsFromCart', { itemId: item.id });
            this.$store.commit('updateSnackbar', { show: true, message: 'Success! Item removed from cart.' })
        }
    }
}