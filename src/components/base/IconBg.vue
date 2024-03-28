<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  size: "sm" | "lg";
  bgColor: string;
}>();

const classes = computed(() => [
  props.size === "sm" && ["w-8", "h-8"],
  props.size === "lg" && ["w-10", "h-10"],
  props.bgColor ? `bg-${props.bgColor}` : "",
]);
</script>

<template>
  <div
    class="p-1.5 rounded-full flex justify-center items-center"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>
