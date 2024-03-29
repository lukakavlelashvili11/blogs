<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderControls from "./base/SliderControls.vue";
import Topic from "./base/Topic.vue";
import ExposeNav from "./base/ExposeNav.vue";

const navRef = ref<{
  next: () => void;
  prev: () => void;
} | null>(null);
</script>

<template>
  <div class="w-full bg-white p-3 rounded-xl" id="slider">
    <div class="slider relative">
      <Swiper
        ref="swiperRef"
        :slides-per-view="1"
        :modules="[Pagination]"
        :pagination="{
          clickable: true,
        }"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <img
            class="w-full h-full rounded-xl"
            src="@/assets/img/main.jpg"
          />
        </SwiperSlide>
        <ExposeNav ref="navRef" />
      </Swiper>
      <div class="mobile:hidden">
      <SliderControls @next="navRef?.next()" @prev="navRef?.prev()"/>
    </div>
    </div>
    <div class="flex justify-start items-center mt-4 gap-1">
      <Topic title="12.08.2023" />
      <Topic title="პოლიტიკა" />
    </div>
    <div class="flex flex-col">
      <span class="text-2xl leading-10 my-4"
        >ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
        პროექტები დაიწყება</span
      >
      <span class="text-secondary-gray text-base mobile:hidden"
        >განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”.
        ობლიგაციის ნომინალი - 1000 USD</span
      >
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: white;
}
</style>
