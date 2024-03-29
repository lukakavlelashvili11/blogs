<script lang="ts" setup>
import Icon from "../base/Icon.vue";
import IconBg from "../base/IconBg.vue";
import Input from "../base/Input.vue";
import Menu from "./Menu.vue";
import { onMounted, ref } from "vue";

type NavListType = {
  title: string;
  url: string;
};

const navList = ref<NavListType[]>([
  {
    title: "პოლიტიკა",
    url: "#",
  },
  {
    title: "საზოგადოება",
    url: "#",
  },
  {
    title: "სამართალი",
    url: "#",
  },
  {
    title: "ბიზნესი & ეკომომიკა",
    url: "#",
  },
]);

const showMenu = ref(false);
const restList = ref<NavListType[]>([]);
const showRestList = ref(false);

const positions = ref<number[]>([]);

const handleNav = () => {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth < 1245) {
    const child1 = document.getElementById("left-nav");
    const child2 = document.getElementById("right-nav");
    if (child1 && child2) {
      const distance =
        child2?.offsetLeft - (child1?.offsetLeft + child1?.offsetWidth);
      const position = child2.getBoundingClientRect().right;
      if (distance < 10) {
        positions.value.push(position);
        restList.value.push(
          navList.value[navList.value.length - positions.value.length]
        );
      }
      if (positions.value.length !== 0) {
        const choosenItem = positions.value.filter(
          (itemPosition) => position > itemPosition
        )?.[0];
        if (choosenItem) {
          positions.value.splice(positions.value.indexOf(choosenItem), 1);
          restList.value.splice(restList.value.length - 1, 1);
        }
      }
    }
  }
};

const isShown = (i: number) =>
  i <= navList.value.length - positions.value.length - 1;

onMounted(() => {
  window.addEventListener("load", handleNav);
  window.addEventListener("resize", handleNav);
});
</script>

<template>
  <header class="w-full bg-white relative">
    <div
      class="mx-auto flex justify-between items-center py-9 w-full mobile:py-6 lg-desktop:max-w-screen-xl md-desktop:max-w-screen-lg px-6 tablet:max-w-screen-md xl-desktop:max-w-screen-xl"
    >
      <div class="flex gap-6 flex-start items-center" id="left-nav">
        <Icon :name="'Logo'" width="137" />
        <div class="separator tablet:hidden"></div>
        <div class="flex gap-8 flex-start items-center tablet:hidden">
          <template v-for="(navItem, i) in navList">
            <template v-if="isShown(i)">
              <a :href="navItem.url">
                <span class="text-secondary-gray font-medium">{{ navItem.title }}</span>
              </a>
            </template>
          </template>
          <div
            @mouseover="showRestList = true"
            class="relative"
            v-if="restList.length"
          >
            <div class="flex justify-start items-center gap-2">
              <span class="text-secondary-gray cursor-default font-medium">სხვა</span>
              <Icon name="ArrowDown" />
            </div>
            <div
              class="rest-list shadow-2xl bg-white p-3 rounded-lg z-10"
              @mouseleave="showRestList = false"
              v-if="showRestList"
            >
              <ul>
                <li class="cursor-pointer mb-1" v-for="item in restList">
                  <a :href="item.url" class="font-medium">
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-start items-center gap-2" id="right-nav">
        <IconBg :bg-color="'primary-light'" :size="'sm'" class="mobile:hidden">
          <Icon :name="'Instagram'" />
        </IconBg>
        <IconBg :bg-color="'primary-light'" :size="'sm'" class="mobile:hidden">
          <Icon :name="'Facebook'" />
        </IconBg>
        <Input :icon="'Search'" class="ml-2 mobile:hidden" />
        <IconBg
        class="hidden mobile:flex"
          :bg-color="'primary-light'"
          :size="'xl'"
        >
          <Icon :name="'Search'" />
        </IconBg>
        <IconBg
        class="hidden tablet:flex"
          :bg-color="'primary-light'"
          :size="'xl'"
          @click="showMenu = !showMenu"
        >
          <Icon :name="'Menu'" />
        </IconBg>
      </div>
    </div>
    <Menu :navList="navList" v-if="showMenu" />
  </header>
</template>

<style scoped>
.rest-list {
  position: absolute;
  top: 35px;
  width: 300px;
  left: -11px;
}
.separator {
  height: 32px;
  width: 2px;
  background: #f0f4f5;
}

/* .tt{
  font-weight: 500;
  font-family: "Helvetica Neue LT GEO", sans-serif;
} */
</style>
