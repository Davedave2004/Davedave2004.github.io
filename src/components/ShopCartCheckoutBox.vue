<template>
  <div>
    <v-card outlined>
        <v-card-title>Payment Details</v-card-title>
        <v-card-text>

            <v-text-field
                label="Name"
                outlined
                v-model="name"
                :rules="nameRules"
            ></v-text-field>

            <v-text-field
                label="Email"
                outlined
                v-model="email"
                :rules="emailRules"
            ></v-text-field>


            <p>Total: ₱{{ totalAmount.toFixed(2) }}</p>

            <v-btn color="primary" @click="goToCheckout">Checkout</v-btn>

        </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'ShopCartCheckoutBox',
    data: () => {
        return {
            checkoutForm: null,
            nameRules: [],
            name: '',
            emailRules: [],
            email: ''
        }
    },
    computed: {
        totalAmount: () => {
            return 100;
        }
    },
    methods: {
        goToCheckout() {
            if (this.$store.state.cart.length) {
                this.$router.push({ name: 'ShopCheckout' });
                return;
            }

            this.$store.commit('updateSnackbar', { show: true, variant: 'error', message: 'Your cart is empty!' })
        }
    }
}
</script>
