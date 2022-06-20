<script lang="ts" setup>
import EventCard from "./EventCard.vue";
import bali from "/src/images/Bali.jpg";
import trainging from "/src/images/training.jpg";
import gardening from "/src/images/gardening.jpg";
</script>

<template>
  <section>
    <h1>Events</h1>
    <div class="events">
      <EventCard
        title="Retreat"
        :img="bali"
        description="Join us this year in our retreat in Bali! With many yoga classes during the day and other uplifting activities."
        when="01.08.22 - 22.8.22"
        price="1500 all incl."
        where="Bali"
      />
      <EventCard
        title="Teacher Training"
        :img="trainging"
        description="Become a yoga teacher and dive deep into the yoga practice! Learn more about asanas and philosophy."
        when="15.01.23 - 15.10.23"
        price="3000€ all incl."
        where="Our Studio"
      />
      <EventCard
        title="Gardening"
        :img="gardening"
        description="Working for a few hours in our comminity garden. Afterwards we will cook together with what we harvested."
        when="25.8.22 || 11:00 - 18:00"
        price="Donation"
        where="Our Studio"
      />
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
  height: 100%;
}
.dates {
  margin-top: 15px;
}
</style>
