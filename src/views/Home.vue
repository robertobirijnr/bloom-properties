<template>
  <div class="home">
    <home-listing />
  </div>
</template>

<script>
import HomeListing from "../components/Home-Listing.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    HomeListing,
  },
};
</script>
