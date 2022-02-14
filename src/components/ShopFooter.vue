<template>
    <div>
        <v-speed-dial
            v-model="fab"
            :fixed="true"
            :bottom="true"
            :right="true"
            :open-on-hover="true"
            transition="slide-y-reverse-transition"
        >
            <template v-slot:activator>
                <v-btn
                    v-model="fab"
                    color="blue darken-2"
                    dark
                    fab
                >
                    <v-badge
                        color="red"
                        :content="cartCount"
                        :value="fab ? 0 : cartCount"
                    >
                        <v-icon v-if="fab">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            fa-globe
                        </v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <v-btn
                fab
                dark
                small
                color="indigo"
                to="/shop/cart"
            >
                <v-badge
                    color="red"
                    :content="cartCount"
                    :value="cartCount"
                >
                    <v-icon>fa-shopping-cart</v-icon>
                </v-badge>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="green"
                to="/shop"
            >
                <v-icon>fa-store</v-icon>
            </v-btn>
        </v-speed-dial>
        <v-footer class="pa-4" app fixed>
            &copy; {{ new Date().getFullYear() }} —&nbsp;<strong>My Shop</strong>&nbsp;
            (from this&nbsp;<a href="https://scrimba.com/learn/vuetify">Vuetify Scrimba Lesson</a>)
        </v-footer>
    </div>


</template>

<script>
export default {
    name: 'ShopFooter',
    data: () => {
        return {
            fab: false
        }
    },
    computed: {
        cartCount() {
            return this.$store.state.cart.length;
        }
    }
}
</script>