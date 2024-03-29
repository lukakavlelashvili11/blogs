<script lang="ts" setup>
import NewsListContainer from "@/components/base/NewsListContainer.vue";
import NewsDatedItem from "@/components/base/NewsDatedItem.vue";
</script>

<template>
  <NewsListContainer :title="'ყველა სიახლე'">
    <template v-for="i in 8">
      <NewsDatedItem />
    </template>
  </NewsListContainer>
</template>
