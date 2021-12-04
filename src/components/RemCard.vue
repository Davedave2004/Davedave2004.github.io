<template>
    <router-link :to="`/rem/${item.id}`">
        <v-card outlined>
            <v-img :src="item.image" height="200px"></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
        </v-card>
    </router-link>
</template>

<script>
export default {
    name: 'RemCard',
    props: {
        rem: Object
    }
}
</script>