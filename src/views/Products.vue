<template>
  <div>
    <div class="d-flex justify-content-between">
      <h3>Products</h3>
      <button @click="openProductModal" class="btn btn-outline-primary">Add Product</button>
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
        <tr>
          <td>Pen</td>
          <td>$20</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Mouse</td>
          <td>$36</td>
          <td>@mdo</td>
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
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Create Product</h5>
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
                  <input type="text" class="form-control" id="product-name" />
                </div>
                <div class="form-group">
                  <label for="product-description">Product Description</label>
                  <textarea
                    class="form-control"
                    name="product-description"
                    id="product-description"
                    rows="15"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-4">
                <h6>Product Details</h6>
                <hr />
                <div class="form-group">
                  <label for="product-price">Product Price</label>
                  <input type="text" class="form-control" id="product-price" />
                </div>
                <div class="form-group">
                  <label for="product-tags">Product Tags (Separate tags with Comma)</label>
                  <input type="text" class="form-control" id="product-tags" />
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
            <button type="button" class="btn btn-primary">Save Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      product: {
        name: null,
        price: null
      }
    };
  },
  methods: {
    openProductModal() {
      window.$("#productModal").modal("show");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-lg {
  max-width: 80% !important;
}
</style>