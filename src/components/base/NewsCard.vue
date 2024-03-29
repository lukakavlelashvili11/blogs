<script lang="ts" setup>
import Topic from "./Topic.vue";
import { computed } from "vue";
import {getImage} from "@/utils/image";

const props = defineProps<{
  bgColor?: string;
  hasTopics?: boolean;
  img?: string;
  isStreched?: boolean;
  data: {
    title: string;
    image: string;
    topics?: string[];
  };
}>();

const classes = computed(() => [
  props.bgColor ? `bg-${props.bgColor}` : "bg-primary-light",
  props.isStreched && "grid grid-rows-3",
]);

// function getImage(fileName) {
//   try {
//     const modules = import.meta.glob('@/assets/img/**/*.{png,svg}', { eager: true })
//     const moduleKeys = Object.keys(modules)
//     const fileSrc = moduleKeys.find(key => key.includes(fileName))

//     return fileSrc ? modules[fileSrc].default : ''
//   } catch (err) {
//     console.log(err)
//   }
// }

// const url = computed(() => new URL(props.data.image, import.meta.url).href);
</script>

<template>
  <div
    class="w-full h-full p-4 rounded-xl flex flex-col gap-2"
    :class="classes"
  >
    <div class="row-span-3">
      <img class="object-cover w-full h-full rounded-xl" :src="getImage(data.image)" />
    </div>
    <div class="row-span-1 flex flex-col gap-4">
      <div class="flex justify-start items-center mt-4 gap-1" v-if="hasTopics">
        <template v-for="topic in data.topics">
          <Topic :title="topic" />
        </template>
      </div>
      <div>
        <span>{{ data?.title }} </span>
      </div>
    </div>
  </div>
</template>
