<template>
    <v-row class="flex-column">
        <v-col v-for="product in products" :key="product.id" class="mb-5 pa-4">
            <ProductHorizontalCard :product="product" @remove-from-cart="removeFromCart" />
        </v-col>
    </v-row>
</template>

<script>
import ProductHorizontalCard from '@/components/ProductHorizontalCard.vue'
import shopMixin from '@/mixins/shopMixin'

export default {
    name: 'ProductList',
    mixins: [shopMixin],
    data: () => {
        return {}
    },
    props: {
        products: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    components: {
        ProductHorizontalCard
    }
}
</script>