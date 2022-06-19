<script lang="ts" setup>
import { CheckIcon } from "@vue-icons/feather";
</script>

<template>
  <div class="wrapper">
    <section>
      <h1>Schedule</h1>

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
    </section>
    <section>
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
          <p>
            Get a voucher and have a snack of drink at our vegan coffee-shop.
          </p>
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
  </div>
  <hr />
</template>

<style>
.factsItem {
  display: flex;
  gap: 10px;
}

.address {
  margin: 30px auto;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
  margin-bottom: 60px;
}

.facts {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
