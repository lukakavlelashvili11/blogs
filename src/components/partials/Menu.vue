<script lang="ts" setup>
import Icon from "../base/Icon.vue";
import IconBg from "../base/IconBg.vue";

defineProps<{
  navList: NavListType[];
}>();

type NavListType = {
  title: string;
  url: string;
};
</script>

<template>
  <div class="menu absolute bg-white w-full p-12 flex flex-col gap-24">
    <ul>
      <li class="mb-10" v-for="navItem in navList">
        <a :href="navItem.url" class="text-secondary-gray font-medium">{{
          navItem.title
        }}</a>
      </li>
    </ul>
    <div class="hidden mobile:flex justify-center items-center w-full gap-2">
      <IconBg :bg-color="'primary-light'" :size="'sm'">
        <Icon :name="'Instagram'" />
      </IconBg>
      <IconBg :bg-color="'primary-light'" :size="'sm'">
        <Icon :name="'Facebook'" />
      </IconBg>
    </div>
  </div>
</template>

<style scoped>
.menu {
  top: 120px;
  z-index: 9;
  height: 100vh;
}
@media (max-width: 560px) {
  .menu {
    top: 95px;
  }
}
</style>
