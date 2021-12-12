<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <h1>Add Listing</h1>
        <form>
          <div class="form-group">
            <label class="text-left" for="title">TITLE</label>
            <input
              type="text"
              v-model="formData.title"
              class="form-control"
              name=""
              id=""
            />
          </div>
          <div class="form-group">
            <label for="title">Description</label>
            <textarea
              name="description"
              v-model="formData.description"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="title">Address</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.address"
              name="address"
            />
          </div>

          <div class="form-group">
            <label for="title">Home Type</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.homeType"
              name="home-type"
            />
          </div>

          <div class="form-group">
            <label for="title">Price</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.price"
              name="price"
            />
          </div>

          <div class="form-group">
            <label for="title">Image Url</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.image"
              name="image"
            />
          </div>

          <div class="form-group">
            <label for="title">Year Built</label>
            <input
              type="date"
              class="form-control"
              v-model="formData.yearBuilt"
              name="year-built"
            />
          </div>

          <button
            @click.prevent="addProperty"
            class="btn btn-primary btn-block"
          >
            Add Listing
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        address: "",
        homeType: "",
        price: "",
        image: "",
        yearBuilt: "",
      },
    };
  },

  methods: {
    addProperty() {
      this.$store.dispatch("addProperty", this.formData);
    },
  },
};
</script>
