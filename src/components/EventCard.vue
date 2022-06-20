<script lang="ts" setup>
import { store } from "../store";

const props = defineProps({
  title: String,
  img: String,
  description: String,
  when: String,
  price: String,
  where: String,
});

function handleClick() {
  store.isModal = !store.isModal;
  store.modalTitle = props.title;
  console.log(store.isModal, store.modalTitle);
}
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
    <button class="registerButton" @click="handleClick">Register</button>
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
  height: 43%;
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

.registerButton {
  margin-top: 20px;
  width: 80%;
  height: 45px;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  transition: 1s;
}

.registerButton:hover {
  background-color: black;
  color: white;
  transition: 1s;
}
</style>
