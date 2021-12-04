<template>
    <v-card outlined :to="`/rem/${rem.id}`">
        <v-img position="center top" :src="rem.image" height="200px"></v-img>
        <v-card-title>{{ rem.name }}</v-card-title>
        <v-card-subtitle>
            <span>
                <v-icon>fa-user-check</v-icon>Owned
            </span>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name: 'RemCard',
    props: {
        rem: Object
    }
}
</script>