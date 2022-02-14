<template>
  <v-app>
    <TheAppBarVue />
    <v-main>
      <router-view />
    </v-main>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="$store.state.snackbar.variant"
    >
      {{ $store.state.snackbar.message }}
      <v-btn
        dark
        text
        @click="$store.commit('updateSnackbar', { show: false })"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import TheAppBarVue from "@/components/TheAppBar.vue";

export default {
  name: 'App',
  components: {
    TheAppBarVue
  }
};
</script>
