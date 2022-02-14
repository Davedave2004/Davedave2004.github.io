<template>
  <v-container class="fill-height">
      <v-row class="mx-auto">
          <v-col class="text-center">
            <v-card outlined>
                <v-card-text>
                    <h1>Thank you!</h1>
                    <p class="pt-4">Your order has been submitted. Please check your email for the confirmation.</p>
                    <p>Click here to go back to the Store home page</p>
                    <v-btn to="/shop">Store Home</v-btn>
                </v-card-text>
            </v-card>
            <small>* no actual email will be sent *</small>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'ShopCheckoutFinish',
    title: 'Shop | Checkout',
    headerTitle: 'Checkout',
    data() {
        return {}
    }
}
</script>