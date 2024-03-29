<script setup lang="ts">
import Header from "@/components/partials/Header.vue";
import Slider from "@/components/Slider.vue";
import News from "@/components/News.vue";
import FactsSlider from "@/components/FactsSlider.vue";
import NewsGrid from "./components/NewsGrid.vue";
import PopularNews from "@/components/PopularNews.vue"
</script>

<template>
  <div class="pb-12">
  <Header />
  <div class="w-full lg-desktop:max-w-screen-xl md-desktop:max-w-screen-lg tablet:max-w-screen-md mx-auto px-6">
    <div class="grid grid-cols-12 grid-rows-1 grid-rows-1 gap-6 pt-10">
      <div class="col-span-9 row-start-1 row-end-1 h-full tablet:col-span-12">
        <Slider />
      </div>
      <div class="col-span-3 row-start-1 row-end-1 tablet:hidden">
        <News />
      </div>
    </div>

    <div class="hidden w-full grid-cols-12 tablet:grid gap-8 pt-10">
      <div class="col-span-6 mobile:col-span-12">
        <News />
      </div>
      <div class="col-span-6 mobile:col-span-12">
        <PopularNews/>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 w-full pt-10">
      <div class="col-span-9 tablet:col-span-12">
        <FactsSlider />
        <div class="pt-10">
          <NewsGrid />
        </div>
        
      </div>
      <div class="col-span-3 tablet:hidden">
        <PopularNews/>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>
