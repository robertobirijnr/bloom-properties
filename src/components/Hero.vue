<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="jumbotron-background"></div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-6">
            <h1 class=" jumbotron-title">Welcome to Bloom Homes</h1>
            <div class="row">
              <div class="col-md-12">
                <p class="jumbotron-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit quidem repudiandae modi autem adipisci, voluptatum
                  
                </p>
              </div>
              <div class="col-md-12">
                <div class="wrapper">
                  <div class="searchBar">
                    <input
                      id="searchQueryInput"
                      type="text"
                      name="searchQueryInput"
                      placeholder="Search"
                      value=""
                    />
                    <button
                      id="searchQuerySubmit"
                      type="submit"
                      name="searchQuerySubmit"
                    >
                      <svg
                        style="width: 24px; height: 24px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#666666"
                          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 d-flex justify-content-center align-items-center">
              <div class="hero-image-container">
                <img
                  src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?cs=srgb&dl=pexels-expect-best-323772.jpg&fm=jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 2px;
  padding: 8px 24px;
}
.btn-primary {
  background-color: #fde015;
  color: #fff;
}
.btn-primary:hover {
  background-color: #ddc202;
}

.jumbotron {
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
  border-radius: 0px;
  background-color: #fff;
}
.jumbotron-background {
  position: absolute;
  left: 50%;
  bottom: 0%;
  margin: auto;
  z-index: -1;
  overflow: hidden;
  height: 3000px;
  width: 9000px;
  background-image: radial-gradient(blue, #f87e00);
  transform: translateX(-85%) rotate(15deg);
  z-index: 1;
  border-radius: 5000px;
}
.jumbotron .container {
  position: relative;
  z-index: 2;
  color: #212121;
}
.jumbotron-title {
  text-transform: uppercase;
  font-weight: 700;
}
.jumbotron-description {
  font-size: 16px;
  word-spacing: 2px;
  font-weight: 500;
}



.credits {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  background-color: #000;
  color: #fde015;
  padding: 8px auto;
}

.wrapper {
  width: 100%;
  max-width: 31.25rem;
}

.label {
  font-size: 0.625rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: +1.3px;
  margin-bottom: 1rem;
}

.searchBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#searchQueryInput {
  width: 100%;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
}

#searchQuerySubmit {
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;
}

#searchQuerySubmit:hover {
  cursor: pointer;
}
</style>
