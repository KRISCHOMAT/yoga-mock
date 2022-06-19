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
@keyframes fadeIn {
  from {
    opacity: 0;
    color: white;
  }
  to {
    opacity: 0.7;
    color: black;
  }
}

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
  position: fixed;
}

.mainHeading {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  padding: 20px;
  width: 100%;
  height: 50%;
  margin: 0 auto;
  background-color: white;
  color: black;
  font-size: 20vw;
  font-weight: 500;
  opacity: 0.7;
  animation-name: fadeIn;
  animation-duration: 3s;
}

@media screen and (max-width: 800px) {
  .mainHeading {
    font-size: 20vw;
  }
  .headingContainer {
    height: 400px;
  }
}
</style>
