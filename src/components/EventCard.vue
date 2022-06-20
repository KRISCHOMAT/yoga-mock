<script lang="ts" setup>
defineProps({
  title: String,
  img: String,
  description: String,
  when: String,
  price: String,
  where: String,
});
</script>

<template>
  <div class="event">
    <h2>{{ title }}</h2>
    <div class="eventImgContainer">
      <img class="eventImg" :src="img" />
    </div>
    <div class="description">
      <p>
        {{ description }}
      </p>
      <div class="dates">
        <p>When: {{ when }}</p>
        <p>Price: {{ price }}</p>
        <p>Where: {{ where }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.event {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event::after {
  content: "";
  position: absolute;
  top: 63px;
  left: 0;
  width: 100%;
  height: 47%;
  z-index: 99;
  border: 3px solid black;
  opacity: 0.6;
  transition: 1s ease-in-out;
}

.event:hover::after {
  left: 10px;
  top: 53px;
  border: 4px solid black;
  opacity: 0.3;
  transition: 1s ease-in-out;
}
</style>
