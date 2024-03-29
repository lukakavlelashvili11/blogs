<script lang="ts" setup>
import NewsCard from "@/components/base/NewsCard.vue";
import { computed, ref } from "vue";

const news = ref([
  {
    title: "ქვემო ქართლის რეგიონში 20 ",
    image: "test.png",
    topics: ["12.08.2023", "პოლიტიკა"],
  },
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების",
    image: "pic.png",
    topics: ["12.08.2023", "პოლიტიკა"],
    isStreched: true,
  },
  {
    title: "ქვემო ქართლის რეგიონში 20",
    image: "test.png",
    topics: ["12.08.2023", "პოლიტიკა"],
  },
  
  {
    title: "ქვემო ქართლის რეგიონში 20 ",
    image: "test.png",
    topics: ["12.08.2023", "პოლიტიკა"],
  },
  {
    title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ",
    image: "test.png",
    topics: ["12.08.2023", "პოლიტიკა"],
  },
]);

const strecheds = computed(() => news.value.filter((item) => item.isStreched));
</script>

<template>
  <div class="w-full hidden tablet:block mb-6">
    <template v-for="newsItem in strecheds">
      <div class="w-full">
        <NewsCard
          has-topics
          :is-streched="newsItem.isStreched"
          :data="newsItem"
          bg-color="white"
        />
      </div>
    </template>
  </div>
  <!-- grid-flow-col -->
  <div
    class="grid grid-cols-3 tablet:grid-cols-4 mobile:flex mobile:flex-wrap grid-rows-2 gap-x-8 gap-y-5"
  >
    <template v-for="newsItem in news">
      <div
        class="col-span-1 tablet:col-span-2 mobile:w-full"
        :class="newsItem.isStreched ? 'row-span-2 tablet:hidden' : 'row-span-1'"
      >
        <NewsCard
          has-topics
          :is-streched="newsItem.isStreched"
          :data="newsItem"
          bg-color="white"
        />
      </div>
    </template>
  </div>
</template>
