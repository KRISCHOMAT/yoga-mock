<script lang="ts" setup>
import bali from "../images/Bali.jpg";
import training from "../images/training.jpg";
</script>

<template>
  <section>
    <h1>Events</h1>
    <div class="events">
      <!-- Bali -->
      <div class="event">
        <h2>Retreat</h2>
        <div class="eventImgContainer">
          <img class="eventImg" :src="bali" />
        </div>
        <div class="description">
          <p>
            Join us this year in our retreat on Bali! With many yoga classes
            during the day and other uplifting activities.
          </p>
          <p>When: 01.08.22 - 22.8.22</p>
          <p>Price: 1500€ all incl.</p>
          <p>Where: Bali</p>
        </div>
      </div>
      <!-- Bali -->
      <div class="event">
        <h2>Teacher Training</h2>
        <div class="eventImgContainer">
          <img class="eventImg" :src="training" />
        </div>
        <div class="description">
          <p>
            Become a yoga teacher and dive deep into the yoga practice! Learn
            more about asanas, philosophy and yoga life-style.
          </p>
          <p>When: 15.01.23 - 15.10.23</p>
          <p>Price: 2000€ all incl.</p>
          <p>Where: Our Studio</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.events {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.event {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  margin-top: 10px;
}

.eventImgContainer {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.eventImg {
  object-fit: cover;
  width: 100%;
}
</style>
