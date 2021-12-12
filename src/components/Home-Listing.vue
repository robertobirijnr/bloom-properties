<template>
  <div class="container my-4">
    Property for Sale in Ghana

    <hr class="mb-5" />

    <!--Carousel Wrapper-->
    <div>
      <div class="carousel-inner" role="listbox">
        <!--First slide-->
        <div class="carousel-item active">
          <div
            v-for="property in getallproperties"
            :key="property._id"
            class="col-md-4"
            style="float: left"
          >
            <div class="card mb-2">
              <img
                class="card-img-top"
                :src="property.image"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">{{ property.title }}</h4>
                <p class="card-text">
                  {{ property.description }}
                </p>
                <div class="row">
                  <div class="col-md-6"><router-link :to="`/view-details/${property._id}`" class="btn btn-primary">View Details</router-link></div>
                  <div class="col-md-6"><button @click="deletePro.perty(property._id)"  class="btn btn-danger">Delete</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/.First slide-->

        <!--Second slide-->

        <!--/.Second slide-->
      </div>
      <!--/.Slides-->
    </div>
  </div>
  <!--/.Carousel Wrapper-->
</template>

<script>
// import axios from "axios";
import {mapGetters} from 'vuex'
export default {
 
  created() {
    this.$store.dispatch("getAllProperties")
  },

  computed:{
    ...mapGetters(["getallproperties"])
  },

  methods:{
    deleteProperty(id){ 
			this.$store.dispatch("deleteProperty", id)  
    }
  }
};
</script>

<style scoped>
.btn-primary {
  background: #783d84 !important;
  border: none;
}
</style>
