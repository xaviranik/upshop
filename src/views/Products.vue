<template>
  <div>
    <div class="d-flex justify-content-between">
      <h3>Products</h3>
      <button @click="openCreateProductModal" class="btn btn-outline-primary">Add Product</button>
    </div>
    <hr />
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="editProduct(product)" class="btn btn-sm btn-outline-primary mr-2">Edit</button>
            <button @click="deleteProduct(product)" class="btn btn-sm btn-outline-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-product" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="editMode" class="modal-title" id="exampleModalCenterTitle">Edit Product</h5>
            <h5 v-else class="modal-title" id="exampleModalCenterTitle">Create Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <h6>Product Information</h6>
                <hr />
                <div class="form-group">
                  <label for="product-name">Product Name</label>
                  <input type="text" class="form-control" id="product-name" v-model="product.name" />
                </div>
                <div class="form-group">
                  <label for="product-description">Product Description</label>
                  <textarea
                    class="form-control"
                    name="product-description"
                    id="product-description"
                    rows="15"
                    v-model="product.description"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-4">
                <h6>Product Details</h6>
                <hr />
                <div class="form-group">
                  <label for="product-price">Product Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="product-price"
                    v-model="product.price"
                  />
                </div>
                <div class="form-group">
                  <label for="product-tags">Product Tags (Separate tags with Comma)</label>
                  <input type="text" class="form-control" id="product-tags" v-model="product.tags" />
                </div>
                <div class="form-group">
                  <label for="product-images">Product Images</label>
                  <input type="file" class="form-control-file" id="product-images" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              v-if="editMode"
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >Update Product</button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click="createNewProduct"
            >Create Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fs } from "@/firebase";

export default {
  name: "Products",
  firestore() {
    return {
      products: fs.collection("products")
    };
  },
  data() {
    return {
      product: {
        name: null,
        description: null,
        tags: null,
        price: null,
        image: null
      },
      products: [],
      editMode: false
    };
  },
  methods: {
    openCreateProductModal() {
      this.resetProduct();
      this.editMode = false;
      window.$("#productModal").modal("show");
    },
    createNewProduct() {
      this.$firestore.products
        .add(this.product)
        .then(() => {
          window.$("#productModal").modal("hide");
        })
        .catch(error => {
          alert("Something went wrong", error);
        });
    },
    editProduct(product) {
      this.editMode = true;
      window.$("#productModal").modal("show");
      this.product = product;
    },
    updateProduct() {
      this.$firestore.products
        .doc(this.product.id)
        .update(this.product)
        .then(() => {
          window.$("#productModal").modal("hide");
        });
    },
    deleteProduct(product) {
      window
        .Swal({
          title: "Are you sure?",
          text: "You will delete the product!",
          icon: "warning",
          buttons: true,
          dangerMode: true
        })
        .then(ok => {
          if (ok) {
            this.$firestore.products.doc(product.id).delete();
            window.Swal("Product has been deleted", {
              icon: "success"
            });
          }
        });
    },
    resetProduct() {
      this.product = {
        name: null,
        description: null,
        tags: null,
        price: null,
        image: null
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-product {
  max-width: 80% !important;
}
</style>