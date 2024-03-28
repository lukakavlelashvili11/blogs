<script setup lang="ts">
import Header from "@/components/partials/Header.vue";
import Slider from "@/components/Slider.vue";
import News from "@/components/News.vue";
import FactsSlider from "@/components/FactsSlider.vue";
</script>

<template>
  <Header />
  <div
    class="grid grid-cols-12 gap-6 w-full lg-desktop:w-lg md-desktop:w-md mx-auto pt-10"
  >
    <div class="col-span-9">
      <Slider />
    </div>
    <div class="col-span-3">
      <News />
    </div>
  </div>

  <div
    class="grid grid-cols-12 gap-6 w-full lg-desktop:w-lg md-desktop:w-md mx-auto pt-10"
  >
    <div class="col-span-9">
      <FactsSlider />
    </div>
    <div class="col-span-3">
    </div>
  </div>
</template>

<style></style>
