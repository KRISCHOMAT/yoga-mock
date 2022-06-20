<script lang="ts" setup>
import { CheckIcon } from "@vue-icons/feather";

import gsap from "gsap";
import { onMounted } from "vue";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".facts", {
    scrollTrigger: ".facts",
    opacity: 1,
    duration: 4,
  });
});
</script>

<template>
  <section id="facts">
    <h1>Facts</h1>
    <div class="facts">
      <div class="factsItem">
        <div class="checkIcon">
          <CheckIcon size="40" />
        </div>
        <p>Very easy drop in system. Just come as you are!</p>
      </div>

      <div class="factsItem">
        <div class="checkIcon">
          <CheckIcon size="40" />
        </div>
        <p>All of our teachers have many years of teaching experience!</p>
      </div>

      <div class="factsItem">
        <div class="checkIcon">
          <CheckIcon size="40" />
        </div>
        <p>Get a voucher and have a snack of drink at our vegan coffee-shop.</p>
      </div>

      <div class="factsItem">
        <div class="checkIcon">
          <CheckIcon size="40" />
        </div>
        <p>
          We are offering many retreats and teacher trainings during the year!
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.factsItem {
  display: flex;
  gap: 10px;
}

.address {
  margin: 30px auto;
}

.facts {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
}
</style>
