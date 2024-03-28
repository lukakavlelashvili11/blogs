<script lang="ts" setup>
import IconBg from "./IconBg.vue";
import Icon from "./Icon.vue";
// import { useSwiper } from "swiper/vue";

defineProps<{
  wrap?: boolean;
  shadow?: boolean;
}>();

// const swiper = useSwiper();
const emits = defineEmits(['prev','next']);

// const next = () => {
//   swiper.value.slideNext();
// };

// defineExpose({
//   swiper
// });
</script>

<template>
  <div
    class="nav nav--left"
    :class="{ unwrap: !wrap }"
    @click="emits('prev')"
  >
    <IconBg :bg-color="'white'" :size="'lg'" :class="{ shadow }">
      <Icon :name="'ArrowLeft'" />
    </IconBg>
  </div>
  <div
    class="nav nav--right"
    :class="{ unwrap: !wrap }"
    @click="emits('next')"
  >
    <IconBg :bg-color="'white'" :size="'lg'" :class="{ shadow }">
      <Icon :name="'ArrowRight'" />
    </IconBg>
  </div>
</template>

<style scoped>
.nav {
  cursor: pointer;
}
.unwrap {
  position: absolute;
  top: 0px;
  bottom: 0px;
  transform: translateY(50%);
  z-index: 1;
}
.shadow {
  box-shadow: 0px 0px 20px 0px #0000001a;
}
.nav--left {
  left: 24px;
}
.nav--right {
  right: 24px;
}
</style>
