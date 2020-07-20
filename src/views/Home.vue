<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Showcase />
      <div class="my-4">
        <h1 class="lead">Hot Deals</h1>
        <hr />
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-3">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
    <Footer />

    <AuthModal />
  </div>
</template>

<script>
import { fs } from "@/firebase";

import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import AuthModal from "@/components/AuthModal.vue";

export default {
  name: "Home",
  data() {
    return {
      products: []
    };
  },
  firestore() {
    return {
      products: fs.collection("products")
    };
  },
  components: {
    Navbar,
    Showcase,
    Footer,
    ProductCard,
    AuthModal
  }
};
</script>
