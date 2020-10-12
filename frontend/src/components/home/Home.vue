<template>
    <div class="home">
        <div  v-for="product in products" :key="product.id">
            <ProductItem :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem.vue";
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  components: { ProductItem },
  data: function() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      const url = `${baseApiUrl}/products`;
      axios.get(url).then(res => (this.products = res.data));
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
    .home {
        display: flex;
        flex-wrap: wrap; 
    }
</style>
