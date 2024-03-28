<script lang="ts" setup>
import { computed } from "vue";
import * as Icons from "../icons";

const props = defineProps<{
  name?: keyof typeof Icons;
  width?: string;
  hasPointer?: boolean;
}>();

const styles = computed(() => ({
  "--width": props.width ? `${props.width}px` : "auto",
}));

const icon = computed(() => {
  return props.name ? Icons[props.name] : null;
});
</script>

<template>
  <component
    :is="icon"
    :style="styles"
    class="icon"
    :class="{ pointer: hasPointer }"
  />
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
.icon {
  width: var(--width);
}
</style>
