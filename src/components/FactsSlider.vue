<script lang="ts" setup>
import SliderControls from "./base/SliderControls.vue";
import NewsCard from "./base/NewsCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import ExposeNav from "./base/ExposeNav.vue";
import { ref } from "vue";

const navRef = ref<{
  next: () => void;
  prev: () => void;
} | null>(null);

const facts = [
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების",
    image: "est.png",
  },
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების",
    image: "test.png",
  },
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების",
    image: "test.png",
  },
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების",
    image: "test.png",
  },
];
</script>

<template>
  <div class="bg-white w-100 p-3 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-medium text-black-900">ცნობილი ფაქტები</span>
      <div class="flex justify-start items-center gap-4">
        <SliderControls wrap shadow @next="navRef?.next" @prev="navRef?.prev" />
      </div>
    </div>
    <div class="mt-5">
      <Swiper :slides-per-view="2.5" :space-between="22">
        <SwiperSlide v-for="fact in facts">
          <NewsCard :data="fact"/>
        </SwiperSlide>
        <ExposeNav ref="navRef" />
      </Swiper>
    </div>
  </div>
</template>
