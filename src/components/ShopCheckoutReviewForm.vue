<template>
    <v-stepper-content step="3">
        <v-list disabled dense>
            <v-subheader class="title">
                Review Info
            </v-subheader>
            <v-list-item-group color="primary">
                <v-list-item
                v-for="(value, name) in formData"
                :key="name"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                        {{ name.toUpperCase() }}: {{ value }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div class="d-flex pt-4">
            <v-btn color="error" @click="$emit('previous')">Previous</v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" @click="$emit('next')">Submit</v-btn>
        </div>
    </v-stepper-content>
</template>

<script>
export default {
    name: 'ShopCheckoutReviewForm',
    props: {
        formData: Object
    },
    data() {
        return {}
    }
}
</script>