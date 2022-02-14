<template>
    <v-card outlined>
        <router-link :to="`/shop/${product.id}`">
            <v-img position="center top" :src="product.image" height="200px"></v-img>
        </router-link>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>₱{{ product.price.toFixed(2) }}</v-card-subtitle>
        <v-card-text>
            <p class="body-1">{{ product.description }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" outlined @click="$emit('add-to-cart', product)">
                <v-icon small left>fa-plus</v-icon>
                Add to cart
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'ProductCard',
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