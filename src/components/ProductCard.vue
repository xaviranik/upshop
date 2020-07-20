<template>
  <div>
    <div class="card shadow-sm mb-4">
      <img class="card-img-top" src="https://via.placeholder.com/400.png?text=Product+Image" />
      <div class="card-body">
        <p class="card-title">{{ product.name | productName }}</p>
        <h5>{{ product.price | productPrice }}</h5>
        <a href="#" class="btn btn-primary mt-2">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  filters: {
    productName: name => {
      if (name.length > 45) {
        name = name.substring(0, 45) + "...";
      }
      return name;
    },
    productPrice: price => {
      return "$" + (Math.round(price * 100) / 100).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  min-height: 400px;
}
.card img {
  height: 220px;
  object-fit: cover;
}
.card-title {
  min-height: 45px;
}
</style>