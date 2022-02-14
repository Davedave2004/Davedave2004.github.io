<template>
  <v-container>
    <v-row>
      <!-- Side Menu for searching/filtering -->
      <v-col
        md="3" offset-lg="1"
      >
        <v-expansion-panels v-if="$vuetify.breakpoint.smAndDown">
          <v-expansion-panel>
            <v-expansion-panel-header>
              Search/Filter Mobile
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form ref="form">
                <v-text-field
                  v-model="searchForm.name"
                  label="Product Name"
                ></v-text-field>
                <v-radio-group v-model="searchForm.priceFilter" mandatory>
                  <v-radio
                    v-for="(price, index) of searchForm.prices"
                    :key="index"
                    :label="price"
                    :value="index"
                  ></v-radio>
                </v-radio-group>
              </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-sheet v-else
          :elevation="4"
          class="pa-4"
        >
          Search/Filter Non Mobile
              <v-form ref="form">
                <v-text-field
                  v-model="searchForm.name"
                  label="Product Name"
                ></v-text-field>
                <v-radio-group v-model="searchForm.priceFilter" mandatory>
                  <v-radio
                    v-for="(price, index) of searchForm.prices"
                    :key="index"
                    :label="price"
                    :value="index"
                  ></v-radio>
                </v-radio-group>
              </v-form>
        </v-sheet>
      </v-col>
      <v-col md="9" lg="7">
        <h1>Shop All</h1>
        <v-row>
          <v-col sm="6" md="4" v-for="product in products" :key="product.id">
            <ProductCard :product="product" @add-to-cart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <ShopFooter />
  </v-container>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import shopMixin from '@/mixins/shopMixin'

export default {
  name: "ShopAll",
  title: 'Shop | All Products',
  mixins: [shopMixin],
  headerTitle: 'Shop',
  data() {
    return {
      searchForm: {
        name: '',
        prices: [
          'Any',
          'Under ₱25',
          '₱25 to ₱100',
          '₱100 to ₱500',
          'Over ₱500'
        ],
        priceFilter: 0,
        checkbox: true
      },
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  components: {
    ProductCard,
    ShopFooter
  }
}
</script>