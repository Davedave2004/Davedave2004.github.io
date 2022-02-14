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
    <v-sheet class="mb-4">
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
        <v-divider vertical></v-divider>
        <v-col>
          <p>If you want to learn more about me, click here!</p>
          <p>If you want to see some Vuetify Components in action, click here!</p>
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider></v-divider>
    <!-- Random Rem Products -->
    <v-sheet class="mt-4">
      <v-row>
        <v-col cols="6">
          <h1>Rem Gallery</h1>
          <p>Rem is best girl. Wanna see more?</p>
          <v-btn to="/rem">Click here!</v-btn>
          <v-row>
            <v-col sm="6" v-for="item in remLatest" :key="item.id">
              <RemCard :rem="item" />
            </v-col>
          </v-row>
        </v-col>
        <!-- Moving Rem -->
        <v-col cols="6">
          <h2>Moving Rem</h2>
          <p>Try dragging Rem and moving it.</p>
          <v-sheet outlined height="100%" class="mt-4" @mouseup="dragend">
            <img
              draggable="false"
              class="draggable rem-sticker"
              width="200"
              src="@/assets/images/remsticker-nobg.png"
              @mousedown="hold"
              @mousemove="drag"
            />
          </v-sheet>
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
        <v-divider vertical></v-divider>
        <v-col>
          <h3>Total Price (Peso)</h3>
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
  headerTitle: 'Home',
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
    },
    remPosition: {
      x: null,
      y: null,
      offsetX: 0,
      offsetY: 0,
      lastDiffX: 0,
      lastDiffY: 0,
      movementX: null,
      movementY: null,
      stopMovement: null
    }
  }),
  beforeDestroy: function () {
    clearInterval(this.remPosition.movementX);
    clearInterval(this.remPosition.movementY);
  },
  methods: {
    hold: function (e) {
      document.querySelector('.rem-sticker').classList.add('dragged');
      this.remPosition.x = e.layerX;
      this.remPosition.y = e.layerY;
      this.remPosition.lastDiffX = 0;
      this.remPosition.lastDiffY = 0;
      clearInterval(this.remPosition.movementX);
      clearInterval(this.remPosition.movementY);
    },
    drag: function (e) {
      const rem = document.querySelector('.rem-sticker');
      if (rem.classList.contains('dragged')) {
        clearTimeout(this.remPosition.stopMovement);
        const diffX = e.layerX - this.remPosition.x;
        const diffY = e.layerY - this.remPosition.y;
        const parentRect = document.querySelector('.rem-sticker').parentElement.getBoundingClientRect();

        if (diffX != 0) {
          const newOffsetX = this.remPosition.offsetX + diffX;
          // Dont exceed left
          if (newOffsetX < 0) {
            return;
          }
          // Dont exceed right
          if (rem.getBoundingClientRect().right + diffX > parentRect.right) {
            return;
          }

          rem.style.left = `${newOffsetX}px`;
          this.remPosition.offsetX = newOffsetX; // Save new offset
        }

        if (diffY != 0) {
          const newOffsetY = this.remPosition.offsetY + diffY;
          // Dont exceed top
          if (newOffsetY < 0) {
            return
          }
          // Dont exceed bottom
          if (rem.getBoundingClientRect().bottom + diffY > parentRect.bottom) {
            return;
          }

          rem.style.top = `${newOffsetY}px`;
          this.remPosition.offsetY = newOffsetY; // Save new offset
        }

        this.remPosition.lastDiffX = diffX;
        this.remPosition.lastDiffY = diffY;

        // Reset lastDiff value if stopped dragging
        this.remPosition.stopMovement = setTimeout(() => {
          this.remPosition.lastDiffX = 0;
          this.remPosition.lastDiffY = 0;
        }, 200);
      }
    },
    dragend: function () {
      clearTimeout(this.remPosition.stopMovement);
      // Compute Rem speed, continue moving Rem after drag
      // Get number of times
      // Continue movement
      if (this.remPosition.lastDiffX != 0) {
        this.remPosition.movementX = setInterval(this.automove, 13, 0, (this.remPosition.lastDiffX > 0 ? 1 : 0));
      }
      if (this.remPosition.lastDiffY != 0) {
        this.remPosition.movementY = setInterval(this.automove, 13, 1, (this.remPosition.lastDiffY > 0 ? 1 : 0));
      }
      document.querySelector('.rem-sticker').classList.remove("dragged");
    },
    automove: function (axis, direction) {
      const rem = document.querySelector('.rem-sticker');
      const diffValue = 7 * (direction ? 1 : -1); // constant speed and direction
      const parentRect = document.querySelector('.rem-sticker').parentElement.getBoundingClientRect();
      // axis 0 = X, left or right
      // axis 1 = Y, up or down
      // direction 0 = negative (left or up)
      // direction 1 = positive (right or down)
      if (axis) {
        // up / down
        let newOffsetY = this.remPosition.offsetY + diffValue;
        // Dont exceed top or bottom, change direction when reached
        if ((newOffsetY < 0) || (rem.getBoundingClientRect().bottom + diffValue > parentRect.bottom)) {
          newOffsetY = newOffsetY - (2 * diffValue);
          clearInterval(this.remPosition.movementY);
          this.remPosition.movementY = setInterval(this.automove, 13, axis, !direction);
        }
        rem.style.top = `${newOffsetY}px`;
        this.remPosition.offsetY = newOffsetY; // Save new offset
      } else {
        // left / right
        let newOffsetX = this.remPosition.offsetX + diffValue;
        // Dont exceed left or right, change direction when reached
        if ((newOffsetX < 0) || (rem.getBoundingClientRect().right + diffValue > parentRect.right)) {
          newOffsetX = newOffsetX - (2 * diffValue);
          clearInterval(this.remPosition.movementX);
          this.remPosition.movementX = setInterval(this.automove, 13, axis, !direction);
        }
        rem.style.left = `${newOffsetX}px`;
        this.remPosition.offsetX = newOffsetX; // Save new offset
      }
    },
    computePrice: function () {
      const isValid = this.$refs.form.validate();
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

<style>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.draggable {
  position: relative;
  top: 0;
  left: 0;
}

.dragged {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.42) 15%,
    rgba(0, 0, 0, 0.69) 45%,
    rgba(255, 255, 255, 0.2) 65%
  );
}
</style>