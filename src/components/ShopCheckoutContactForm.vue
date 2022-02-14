<template>
    <v-stepper-content step="1">
        <v-text-field
            v-model="formData.name"
            :rules="[rules.required]"
            label="Name"
            required
        />

        <v-text-field
            v-model="formData.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
        />

        <v-text-field
            v-model="formData.phone"
            :rules="[rules.required, rules.phone]"
            label="Phone Number"
            required
        />

        <div class="d-flex pt-4">
            <v-btn color="error" @click="$emit('previous')">Cancel</v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" @click="submit">Continue</v-btn>
        </div>
    </v-stepper-content>
</template>

<script>
export default {
    name: 'ShopCheckoutContactForm',
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