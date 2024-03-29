<script lang="ts" setup>
import NewsListContainer from "@/components/base/NewsListContainer.vue";
import NewsPopularItem from "@/components/base/NewsPopularItem.vue";
</script>

<template>
  <NewsListContainer :title="'პოპულარული'">
    <template v-for="i in 5">
      <NewsPopularItem />
    </template>
  </NewsListContainer>
</template>
