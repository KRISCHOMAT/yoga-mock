<script lang="ts" setup>
import image from "../images/Yoga3.jpg";
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  const size = window.innerWidth;
  gsap.fromTo(
    ".mainHeading",
    { x: -size },
    { x: 0, duration: 1, ease: "back" }
  );
});
</script>

<template>
  <div class="headingContainer">
    <img class="headingImg" :src="image" />
    <div class="mainHeadingContainer">
      <h1 class="mainHeading">The Yoga Base</h1>
    </div>
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

.mainHeadingContainer {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  padding: 20px;
  height: 50%;
  opacity: 0.7;
}

.mainHeading {
  color: black;
  font-size: 20vw;
  font-weight: 500;
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
