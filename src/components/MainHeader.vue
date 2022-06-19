<script lang="ts" setup>
import image from "../images/Yoga3.jpg";
</script>

<template>
  <div class="headingContainer">
    <img class="headingImg" :src="image" />
    <h1 class="mainHeading">The Yoga Base</h1>
  </div>
</template>

<style>
.headingContainer {
  position: relative;
  display: flex;
  height: 700px;
  align-items: center;
  overflow: hidden;
}

.headingImg {
  width: 100%;
  height: 800px;
  object-fit: cover;
  position: absolute;
}

.mainHeading {
  border: 2px solid black;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
  color: black;
  font-size: 10vw;
  opacity: 0.7;
}

@media screen and (max-width: 800px) {
  .mainHeading {
    font-size: 15vw;
  }
  .headingContainer {
    height: 400px;
  }
}
</style>
