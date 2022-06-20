<script lang="ts" setup>
import { store, register } from "@/store";
import { XIcon } from "@vue-icons/feather";
import { ref } from "vue";
const email = ref("");
const name = ref("");

function closeModal() {
  store.isModal = false;
}

function sendData() {
  register(email.value, name.value, store.modalTitle);
  closeModal();
  email.value = "";
  name.value = "";
}
</script>

<template>
  <div class="modalBackground" :class="{ showModalBackground: store.isModal }">
    <div class="modalContainer" :class="{ showModal: store.isModal }">
      <button class="closeModal" @click="closeModal">
        <XIcon size="30" />
      </button>
      <h2>{{ store.modalTitle }}</h2>
      <label htmlFor="email">Email</label>
      <input v-model="email" class="registerInput" name="email" />
      <label htmlFor="name">Name</label>
      <input v-model="name" class="registerInput" name="name" />
      <button class="sendButton" @click="sendData">Send</button>
    </div>
  </div>
</template>

<style>
.modalBackground {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -99;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  transition: 1s;
}

.showModalBackground {
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 1s;
  overflow: hidden;
}

.modalContainer {
  border: 3px solid black;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: -100%;
  background-color: white;
  transition: 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 0 30px 50px;
  width: 100%;
  max-width: 400px;
  transform: translate(-200px);
}

.showModal {
  left: 50%;
  transition: 1s;
}

.closeModal {
  position: absolute;
  left: 0;
  border: 0;
  background-color: white;
  cursor: pointer;
}

.sendButton {
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

.sendButton:hover {
  background-color: black;
  color: white;
  transition: 1s;
}

.registerInput {
  height: 30px;
}
</style>
