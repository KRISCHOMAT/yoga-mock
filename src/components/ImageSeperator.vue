<script lang="ts" setup>
import image from "../images/Yoga1.jpg";
</script>

<template>
  <div class="headingContainer">
    <img class="footerImg" :src="image" />
    <h1 class="seperatorHeading">Namaste.</h1>
  </div>
</template>

<style>
.seperatorHeading {
  padding: 20px;
  margin: 0 auto;
  color: white;
  font-size: 10vw;
  opacity: 0.7;
}

.footerImg {
  width: 100%;
  height: 800px;
  object-fit: cover;
  position: absolute;
}

@media screen and (max-width: 800px) {
  .seperatorHeading {
    font-size: 15vw;
  }
}
</style>
