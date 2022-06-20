<script lang="ts" setup>
import gsap from "gsap";
import { onMounted } from "vue";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".schedule", {
    scrollTrigger: ".schedule",
    opacity: 1,
    duration: 4,
  });
});
</script>

<template>
  <section>
    <h1>Schedule</h1>
    <div class="schedule">
      <h2>Monday</h2>
      <p>10:00 - 11:30 || Vinyasa Flow</p>
      <p>13:00 - 14:30 || Vinyasa Flow</p>
      <p>18:00 - 19:30 || Hatha</p>
      <h2>Tuesday</h2>
      <p>10:00 - 11:30 || Vinyasa Flow</p>
      <p>13:00 - 14:30 || Vinyasa Flow</p>
      <p>18:00 - 19:30 || Hatha</p>
      <h2>Thursday</h2>
      <p>10:00 - 11:30 || Vinyasa Flow</p>
      <p>13:00 - 14:30 || Vinyasa Flow</p>
      <p>18:00 - 19:30 || Hatha</p>
      <h2>Friday</h2>
      <p>10:00 - 11:30 || Vinyasa Flow</p>
      <p>13:00 - 14:30 || Vinyasa Flow</p>
      <p>18:00 - 19:30 || Hatha</p>
    </div>
  </section>
</template>

<style>
.schedule {
  opacity: 0;
}
</style>
