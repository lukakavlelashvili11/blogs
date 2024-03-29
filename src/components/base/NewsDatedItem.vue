<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div class="border-b-2 border-dashed mb-4">
    <div class="flex justify-start items-center gap-2">
      <Icon :name="'Clock'" />
      <div class="flex justify-start items-center gap-1">
        <span class="text-purple text-xs font-bold">7:30</span>
        <Icon :name="'Point'" />
        <span class="text-purple text-xs font-bold">02.01.2023</span>
      </div>
    </div>
    <div class="my-2">
      <span class="text-sm"> დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა </span>
    </div>
  </div>
</template>
