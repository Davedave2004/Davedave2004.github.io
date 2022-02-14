<template>
    <v-container>
        <v-sheet class="d-flex justify-center align-center" :height="sheetHeight">
            <h1 class="text-center text-h4 text-sm-h1">Welcome to my Shop!</h1>
        </v-sheet>

        <v-row class="flex-column" sm="10" offset-sm="1" md="8" offset-md="2">
            <v-col>
                <h2>Popular products <v-btn to="/shop/all" color="primary" small text>View All</v-btn></h2>
            </v-col>
            <v-col>
                <v-row>
                    <v-col v-for="product in popularProducts" :key="product.id" sm="6" md="4">
                        <ProductCard :product="product" @add-to-cart="addToCart" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <ShopFooter />
    </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import shopMixin from '@/mixins/shopMixin'

// Add to card mixin

export default {
    name: 'Shop',
    title: 'Shop',
    mixins: [shopMixin],
    headerTitle: 'Shop',
    data: () => {
        return {}
    },
    computed: {
        sheetHeight: function () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '200px'
                case 'sm': return '300px'
                case 'md': return '300px'
                case 'lg': return '300px'
                case 'xl': return '350px'
            }

            return '300px'
        },
        popularProducts: function() {
            return this.$store.state.products.slice(0,3);
        }
    },
    components: {
        ProductCard,
        ShopFooter
    }
}
</script>
