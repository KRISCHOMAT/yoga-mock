<script lang="ts" setup>
import { ref } from "vue";
import { AlignRightIcon } from "@vue-icons/feather";

const isMenue = ref(false);

function toggleMenue() {
  isMenue.value = !isMenue.value;
}
</script>

<template>
  <div class="menueContainer">
    <div
      class="burgerContainer"
      :class="{ closeContainer: isMenue }"
      @click="toggleMenue"
    >
      <AlignRightIcon size="75" />
    </div>
    <div class="linkContainer" :class="{ show: isMenue }">
      <a @click="toggleMenue" href="#schedule">Schedule</a>
      <a @click="toggleMenue" href="#facts">Facts</a>
      <a @click="toggleMenue" href="#events">Events</a>
    </div>
  </div>
</template>

<style>
.menueContainer {
  position: fixed;
  z-index: 100;
  top: 10px;
  right: 10px;
}

/* burder container */
.burgerContainer {
  background-color: black;
  position: relative;
  z-index: 999;
  color: white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: 1s;
  transition-delay: 0.5s;
}
.closeContainer {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  opacity: 1;
  transition: 0.5s;
}

/* link container */
.linkContainer {
  background-color: black;
  color: white;
  height: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  top: 0;
  transition: 0.5s;
  align-items: center;
}

.show {
  height: 220px;
  padding: 20px;
  transition: 0.5s;
  transition-delay: 0.5s;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
</style>
