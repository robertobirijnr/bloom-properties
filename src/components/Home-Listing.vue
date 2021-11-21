<template>
  <div class="container my-4">
   Property for Sale in Ghana

    <hr class="mb-5" />

    <!--Carousel Wrapper-->
    <div
     
    >
    
     
      <div class="carousel-inner" role="listbox">
        <!--First slide-->
        <div class="carousel-item active">

          <div v-for="property in properties" :key="property._id" class="col-md-4" style="float: left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                :src="property.image"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">{{property.title}}</h4>
                <p class="card-text">
                  {{property.description}}
                </p>
                <a class="btn btn-primary">View Details</a>
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
import axios from 'axios';
export default {
    data() {
        return {
            properties: []
        }
    },
    created(){
        axios.get("https://home-listing-gh.herokuapp.com/api/houses")
        .then(response=>{
            this.properties = response.data
        })
    }
};
</script>

<style  scoped>

.btn-primary{
    background: #783d84 !important;
    border: none;
}
</style>
