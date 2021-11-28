<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card mb-2">
          <img
            class="card-img-top"
             :src="propertyDetail.image"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">{{propertyDetail.title}}</h4>
            <p class="card-text">
              {{propertyDetail.description}}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Contact Address</div>
          <div class="card-body">
            <p>Location: {{propertyDetail.address}}</p>
            <p>Home Type: {{propertyDetail.homeType}}</p>
            <p>Telephone: 0242022611</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      properties: [],
      id: this.$route.params.id,
      propertyDetail:{}
    };
  },

  created() {
    axios
      .get("https://home-listing-gh.herokuapp.com/api/houses")
      .then((response) => {
        this.properties = response.data;
        this.propertyDetail = this.properties.find(
          (property) => property._id == this.id
        );
        console.log(this.propertyDetail);
      });
  },
};
</script>

<style lang="scss" scoped></style>
