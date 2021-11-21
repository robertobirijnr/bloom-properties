<template>
  <nav class="navbar navbar-light navbar-expand-sm bg-light fixed-top">
    <div class="container">
      <a href="/" class="navbar-brand">
        <i class="fas fa-blog"></i> &nbsp; Bloom Properties
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link active"> Properties </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-listing" class="nav-link active"> Add Listing </router-link>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link active"> Sign Up </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link active"> Sign In </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
