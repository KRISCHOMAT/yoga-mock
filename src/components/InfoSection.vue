<script lang="ts" setup>
import ScheduleSection from "./ScheduleSection.vue";
import FactsSection from "./FactsSection.vue";
</script>

<template>
  <div class="wrapper">
    <ScheduleSection />
    <FactsSection />
  </div>
  <div class="hrContainer">
    <hr />
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
  background-color: white;
}

.hrContainer {
  border: 1px solid white;
  background-color: white;
}
</style>
