<script setup lang="ts">
import MainHeader from "./components/MainHeader.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import InfoSection from "./components/InfoSection.vue";
import EventsSection from "./components/EventsSection.vue";
import ImageSeperator from "./components/ImageSeperator.vue";
</script>

<template>
  <MainHeader />
  <WelcomeSection />
  <InfoSection />
  <EventsSection />
  <ImageSeperator />
</template>

<style>
@import "./assets/base.css";

.flexWrap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
