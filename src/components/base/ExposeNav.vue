<script lang="ts" setup>
import { useSwiper } from "swiper/vue";
const swiper = useSwiper();

const next = () => swiper.value.slideNext();
const prev = () => swiper.value.slidePrev();

defineExpose({
  next,
  prev,
});
</script>

<tamplate></tamplate>
