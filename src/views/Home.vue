<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Showcase />
      <div class="my-4">
        <h1 class="lead">Hot Deals</h1>
        <hr />
        <ProductCard />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Showcase,
    Footer,
    ProductCard
  }
};
</script>
