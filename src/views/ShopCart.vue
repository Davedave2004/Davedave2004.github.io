<template>
    <v-container>
        <v-row>
            <!-- Cart -->
            <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
                <h2>Cart ({{ cart.length }})</h2>
                <!-- Cart Items-->
                <ProductList :products="cart" />
            </v-col>
            <!-- Payment Details -->
            <v-col sm="4" md="3" order="first" order-sm="last">
                <v-sheet>
                    <ShopCartCheckoutBox />
                </v-sheet>
            </v-col>
        </v-row>

        <ShopFooter />
    </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import ShopCartCheckoutBox from '@/components/ShopCartCheckoutBox.vue'

export default {
    name: 'ShopCart',
    title: 'Shop | My Cart',
    headerTitle: 'My Cart',
    data: () => {
        return {}
    },
    computed: {

        cart: function() {
            let products = this.$store.state.products;
            console.log(products);
            console.log(this.$store.state.cart);
            // Get the products that are in the cart
            let cart = this.$store.state.cart.map((cartItem) => {
                let itemId = cartItem.itemId;

                const idx = products.findIndex((product) => {
                    return product.id === itemId;
                });

                return products[idx];
            });

            return cart;
        }
    },
    components: {
        ProductList,
        ShopFooter,
        ShopCartCheckoutBox
    }
}
</script>
