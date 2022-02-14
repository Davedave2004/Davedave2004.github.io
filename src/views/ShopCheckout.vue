<template>
    <v-container>
        <v-row>
            <v-col sm="6" offset-sm="3">
                <v-stepper alt-labels v-model="formStep">
                    <v-stepper-header>
                        <v-stepper-step
                            step="1"
                            :complete="formStep > 1"
                        >
                            Contact Info
                        </v-stepper-step>
                        <v-divider />
                        <v-stepper-step
                            step="2"
                            :complete="formStep > 2"
                        >
                            Shipping Info
                        </v-stepper-step>
                        <v-divider />
                        <v-stepper-step
                            step="3"
                            :complete="formStep > 3"
                        >
                            Complete
                        </v-stepper-step>

                    </v-stepper-header>
                    <v-stepper-items>
                        <ShopCheckoutContactForm
                            :formData="formData"
                            :rules="rules"
                            @previous="$router.replace({name: 'ShopCart'})"
                            @next="nextStep"
                        />
                        <ShopCheckoutShippingForm
                            :formData="formData"
                            :rules="rules"
                            @previous="previousStep"
                            @next="nextStep"
                        />
                        <ShopCheckoutReviewForm
                            :formData="formData"
                            @previous="previousStep"
                            @next="submitOrder"
                        />
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>

        <div class="text-center">
            <v-overlay :value="overlay" class="flex-column">
            <p>Processing order...</p>
            <v-progress-circular indeterminate size="64" />
            </v-overlay>
        </div>
    </v-container>
</template>

<script>
import ShopCheckoutContactForm from "../components/ShopCheckoutContactForm.vue"
import ShopCheckoutShippingForm from "../components/ShopCheckoutShippingForm.vue"
import ShopCheckoutReviewForm from "../components/ShopCheckoutReviewForm.vue"

export default {
    name: 'ShopCheckout',
    title: 'Shop | Checkout',
    headerTitle: 'Checkout',
    data: () => {
        return {
            formStep: 1,
            checkoutForm: false,
            formData: {
                email: '',
                name: '',
                phone: '',
                street: '',
                city: '',
                postal: '',
            },
            rules: {
                required: value => !!value || 'Required.',
                postal: value => value.length == 4 || 'Must be four characters',
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
                phone: value => {
                const pattern = /\d{10}/
                return pattern.test(value) || 'Invalid phone number.'
                }
            },
            overlay: false
        }
    },
    methods: {
        nextStep() {
            this.formStep += 1;
        },
        previousStep() {
            this.formStep -= 1;
        },
        submitOrder() {
            // Confirm Info
            this.overlay = true
            setTimeout(() => {
                this.overlay = false
                this.$router.push({name: 'ShopCheckoutFinish'});
            }, 3000);
        },
    },
    components: {
        ShopCheckoutContactForm,
        ShopCheckoutShippingForm,
        ShopCheckoutReviewForm
    }
}
</script>