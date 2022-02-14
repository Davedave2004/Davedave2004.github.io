<template>
    <v-stepper-content step="2">
        <v-text-field
            v-model="formData.street"
            label="Street Address"
            required
        />

        <v-text-field
            v-model="formData.city"
            label="City"
            required
        />

        <v-text-field
            v-model="formData.postal"
            label="Postal"
            :rules="[rules.required, rules.postal]"
            required
        />
        <div class="d-flex pt-4">
            <v-btn color="error" @click="$emit('previous')">Previous</v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" @click="submit">Review</v-btn>
        </div>
    </v-stepper-content>
</template>

<script>
export default {
    name: 'ShopCheckoutShippingForm',
    props: {
        formData: Object,
        rules: Object
    },
    data() {
        return {}
    },
    methods: {
        submit() {
            // Check forms first
            this.$emit('next');
        }
    }
}
</script>