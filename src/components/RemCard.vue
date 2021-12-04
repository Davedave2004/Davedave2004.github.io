<template>
    <v-card outlined :to="`/rem/${rem.id}`">
        <v-img position="center top" :src="rem.image" height="200px"></v-img>
        <v-card-title>{{ rem.name }}</v-card-title>
        <v-card-subtitle>
            <span v-if="rem.owned">
                <v-icon small class="mr-2">fa-user-check</v-icon>Owned
            </span>
            <span v-else>
                <v-icon small class="mr-2">fa-user-times</v-icon>Not Owned
            </span>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name: 'RemCard',
    props: {
        rem: {
            type: Object,
            // Object or array defaults must be returned from
            // a factory function
            default: function () {
                return {
                    id: 0,
                    name: '',
                    image: null,
                    owned: false
                }
            }
        }
    }
}
</script>