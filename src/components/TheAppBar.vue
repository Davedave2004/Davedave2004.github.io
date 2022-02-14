<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-toolbar-title id="header-title" style="cursor: pointer" @click="$router.push('/')" v-on="on" v-bind="attrs">Home</v-toolbar-title>
                </template>
                <span>Back to Home</span>
            </v-tooltip>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn to="/" text>
                <v-icon small left>fa-home</v-icon>
                Home
                </v-btn>
                <v-btn to="/shop" text>
                <v-icon small left>fa-shopping-basket</v-icon>
                Store
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="blue--text text--lighten-2">
                    <v-list-item v-for="item in links" :key="item.link"  :to="item.link">
                        <v-list-item-icon>
                        <v-icon>{{ item.iconType }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'TheAppBar',
    data: () => ({
        drawer: false,
        group: null,
        links: [
            {
                text: 'Home',
                iconType: 'fa-home',
                link: '/'
            },
            {
                text: 'Shop Project',
                iconType: 'fa-store',
                link: '/shop'
            },
            {
                text: 'Rem Gallery',
                iconType: 'fa-heart',
                link: '/rem'
            },
            {
                text: 'About',
                iconType: 'fa-user-tie',
                link: '/about'
            }
        ]
    })
}
</script>