<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  gsap.to(".welcome", { opacity: 1, duration: 2 });
});
</script>

<template>
  <section id="#welcome">
    <div class="content welcome">
      <h1>Welcome...</h1>
      <p>
        to our beautiful yogastudio in a cozy backyard. You can enjoy our
        classes and then relax in our vegan coffee place just around the corner.
      </p>
      <p>
        Have a look at our schedule and find a class that suits you! We are
        happy to welcome you here.
      </p>
      <p>Namaste.</p>
      <hr />
    </div>
  </section>
</template>

<style>
.welcome {
  opacity: 0;
}
</style>
