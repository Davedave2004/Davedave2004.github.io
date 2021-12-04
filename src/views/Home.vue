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
      <v-row>
        <v-col>
          <h1>About</h1>
          <p>
            This page is just me trying to make something out of Vue / Vuetify. Currently, I am just trying out Vuetify by following a
            <a
              href="https://scrimba.com/learn/vuetify"
            >lesson from Scrimba.</a> I'll put random stuff also just to try things out.
          </p>
          <h3>Feel free to explore!</h3>
        </v-col>
        <v-col>
          <p>If you want to learn more about me, click here!</p>
          <p>If you want to see some Vuetify Components in action, click here!</p>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Random Rem Products -->
    <v-sheet>
      <v-row>
        <v-col>
          <h1>Rem Gallery</h1>
          <p>Rem is best girl. Wanna see more?</p>
          <v-btn to="/rem">Click here!</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" md="4" v-for="item in remLatest" :key="item.id">
          <RemCard :rem="item" />
        </v-col>
      </v-row>
    </v-sheet>

    <!-- About Mandarake -->
    <v-sheet class="mb-12">
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
          <v-form ref="form" v-model="mandarake.valid" lazy-validation>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.number="mandarake.price"
                  :rules="[rules.format, rules.morethanzero]"
                  label="Price (Yen)"
                  prefix="¥"
                  outlined
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model.number="mandarake.weight"
                  :rules="[rules.format, rules.morethanzero]"
                  label="Weight (grams)"
                  outlined
                  clearable
                ></v-text-field>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn class="mr-3 mb-3" @click="computePrice">Compute</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col>
          <h3>Total Price (Pesos)</h3>
          <v-sheet>{{ mandarake.totalPrice.toFixed(2) }}</v-sheet>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Footer -->
    <v-footer absolute>I am a footer</v-footer>
  </v-container>
</template>

<script>
import RemCard from '@/components/RemCard'

export default {
  name: 'Home',
  title: 'Davedave2004 GH Pages',
  components: {
    RemCard
  },
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
      { id: 15, name: 'Relax Time - Ice Pop', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-15.jpg", owned: true },
      { id: 14, name: 'Winter Coat', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-14.jpg", owned: true },
      { id: 13, name: 'Memory Snow Dog Ears', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-13.jpg", owned: true }
    ],
    mandarake: {
      price: 0,
      weight: 0,
      totalPrice: 0,
      valid: true
    },
    rules: {
      required: (v) => !!v || 'Required',
      morethanzero: (v) => v >= 0 || 'No negative values',
      format: (v) => /^((0\.?)|([1-9]+\.?))[0-9]*$/.test(v) || 'Numbers/Decimals only'
    }
  }),
  methods: {
    computePrice: function () {
      const isValid = this.$refs.form.validate();
      console.log(isValid);
      if (isValid) {
        const computePrice = this.mandarake.price / 2;
        const shippingPrice = this.mandarake.weight * 1.2;
        const tax = (computePrice + shippingPrice) * 0.18;
        this.mandarake.totalPrice = computePrice + shippingPrice + tax;
      }
    }
  }
}
</script>
