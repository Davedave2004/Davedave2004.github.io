<template>
  <v-container>
    <!-- Carousel of features -->
    <v-carousel v-model="carousel.model">
      <v-carousel-item v-for="(color, i) in carousel.colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- About Me -->
    <v-sheet>
      <h1>About Me</h1>
      <p>This page is just me trying to make something out of Vue / Vuetify.</p>
      <p>Currently, I am just trying out Vuetify by following a lesson from Scrimba(link here)</p>
    </v-sheet>

    <!-- Latest Rem Products -->
    <v-sheet>
      <v-row>
        <v-col>
          <h1>Rem Gallery</h1>
          <p>Rem is best girl. Wanna see more?</p>
          <v-btn>Click here!</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in remLatest" :key="item.id">
          <!-- TODO: Should I wrap this with  router-link or just programatically navigate -->
          <router-link :to="`/rem/${item.id}`">
            <v-card>
              <v-img :src="item.image" height="200px"></v-img>
              <v-card-title>{{ item.name }}</v-card-title>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- About Mandarake -->
    <v-sheet>
      <h1>Mochabricks and Mandarake</h1>
      <p>
        Mochabricks is a store where you can buy anime merch/figures and they also offer "pasa-buy" service if you have something you want in Mandarake(link here).
        Mandarake is a Japanese store where they offer Japanese items in various conditions, mostly second-hand, but some can be in brand new or unopened conditions.
        Of course Mandarake will be selling the items in their own currency (Yen) so Mochabricks will try to buy it for you by converting its price in an agreed upon rate then adding tax and shipping cost from Japan.
        I have availed their service and bought some items but the calculations can be a hassle when doing it manually so I added a page here where I can convert the item's price in Yen to Mochabricks calculated price in Pesos.
      </p>
      <h2>Try it out here or go to its own page by clicking the link below</h2>
      <v-row>
        <v-col>
          <v-row>
            <v-col>Input price here</v-col>
            <v-col>Input weight here</v-col>
          </v-row>
        </v-col>
        <v-col>Total here</v-col>
      </v-row>
    </v-sheet>

    <!-- Footer -->
    <v-footer absolute>I am a footer</v-footer>
  </v-container>
</template>

<script>


export default {
  name: 'Home',
  data: () => ({
    carousel: {
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ]
    },
    remLatest: [
      { id: 15, name: 'Relax Time - Ice Pop', image: "https://raw.githubusercontent.com/davedave2004/vuetify-test/master/rem-15.jpg" },
      { id: 14, name: 'Winter Coat', image: "https://raw.githubusercontent.com/davedave2004/vuetify-test/master/rem-14.jpg" },
      { id: 13, name: 'Memory Snow Dog Ears', image: "https://raw.githubusercontent.com/davedave2004/vuetify-test/master/rem-13.jpg" }
    ]
  })
}
</script>
