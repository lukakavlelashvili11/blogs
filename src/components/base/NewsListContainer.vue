<script lang="ts" setup>
import { onMounted, onUnmounted, onBeforeMount, ref } from "vue";

defineProps<{
  title: string;
}>();

const height = ref(0);

const getSliderHeight = () => {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth > 1024) {
    const clientHeight = document.querySelector("#slider")?.clientHeight;
    if (clientHeight) height.value = clientHeight;
  } else {
    height.value = 330;
  }
};

onMounted(() => {
  window.addEventListener("load", getSliderHeight);
  window.addEventListener("resize", getSliderHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", getSliderHeight);
});
</script>

<template>
  <div
    class="w-full bg-white py-6 px-3 rounded-xl overflow-auto"
    :style="{ maxHeight: `${height}px` }"
  >
    <div>
      <h2 class="font-bold">{{ title }}</h2>
    </div>
    <div class="flex flex-col mt-6">
      <slot></slot>
    </div>
  </div>
</template>
