<template>
    <v-card
        outlined
        min-width="100%"
    >
        <div class="d-flex">
            <div>
                <router-link :to="`/shop/${product.id}`">
                    <v-img position="center top" :src="product.image" width="120px" height="120px"></v-img>
                </router-link>
            </div>
            <div class="d-flex flex-column justify-center">
                <v-card-title class="pt-0">{{ product.name }}</v-card-title>
                <v-card-subtitle>₱{{ product.price.toFixed(2) }}</v-card-subtitle>
                <v-btn color="error" outlined @click="$emit('remove-from-cart', product)">
                    <v-icon small left>fa-minus</v-icon>
                    Remove From Cart
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'ProductHorizontalCard',
    props: {
        product: {
            type: Object,
            default: function () {
                return {
                    id: 0,
                    name: '',
                    image: '',
                    price: 0,
                    description: ''
                }
            }
        }
    }
}
</script>