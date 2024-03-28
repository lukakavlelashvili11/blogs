<script lang="ts" setup>
import Icon from "@/components/base/Icon.vue";
</script>

<template>
  <div class="w-full bg-white py-6 px-3 rounded-xl">
    <div><h2 class="font-bold">ყველა სიახლე</h2></div>
    <div class="flex flex-col mt-6">
      <div v-for="i in 5" class="border-b-2 border-dashed mb-4">
        <div class="flex justify-start items-center gap-2">
          <Icon :name="'Clock'" />
          <div class="flex justify-start items-center gap-1">
            <span class="text-purple text-xs font-bold">7:30</span>
            <Icon :name="'Point'" />
            <span class="text-purple text-xs font-bold">02.01.2023</span>
          </div>
        </div>
        <div class="my-2.5">
          <span>
            დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
