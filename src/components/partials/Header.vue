<script lang="ts" setup>
import Icon from "../base/Icon.vue";
import IconBg from "../base/IconBg.vue";
import Input from "../base/Input.vue";

type NavListType = {
  title: string;
  url: string;
  nestedNavList?: NavListType[];
};

const navList: NavListType[] = [
  {
    title: "პოლიტიკა",
    url: "",
  },
  {
    title: "საზოგადოება",
    url: "",
  },
  {
    title: "სამართალი",
    url: "",
  },
  {
    title: "ბიზნესი & ეკომომიკა",
    url: "",
  },
  {
    title: "სხვა",
    url: "",
    nestedNavList: [
      {
        title: "პოლიტიკა",
        url: "",
      },
    ],
  },
];
</script>

<template>
  <header class="w-full bg-white">
    <div
      class="mx-auto flex justify-between items-center py-9 w-full lg-desktop:w-lg md-desktop:w-md"
    >
      <div class="flex gap-8 flex-start items-center">
        <Icon :name="'Logo'" width="137" />
        <template v-for="navItem in navList">
          <template v-if="!navItem.nestedNavList">
            <a :href="navItem.url">
              <span class="text-secondary-gray">{{ navItem.title }}</span>
            </a>
          </template>
          <template v-else>
            <span class="text-secondary-gray">{{ navItem.title }}</span>
            <select style="display: none"></select>
          </template>
        </template>
      </div>
      <div class="flex justify-start items-center gap-2">
        <IconBg :bg-color="'primary-light'" :size="'sm'">
          <Icon :name="'Instagram'" />
        </IconBg>
        <IconBg :bg-color="'primary-light'" :size="'sm'">
          <Icon :name="'Facebook'" />
        </IconBg>
        <Input :icon="'Search'" class="ml-2" />
      </div>
    </div>
  </header>
</template>
