<script lang="ts" setup>
import Icon from "./Icon.vue";
import * as Icons from "../icons";

defineProps<{
  icon: keyof typeof Icons;
}>();
</script>

<template>
  <div class="input bg-primary-light">
    <input class="input__element" :placeholder="'ძიება'" />
    <Icon v-if="icon" :name="icon" />
  </div>
</template>

<style scoped>
.input {
  width: 224px;
  height: 48px;
  border-radius: 64px;
  background-color: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 16px;
  color: black;
}
.input__element {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
}
.input__element::placeholder {
  color: black;
  font-weight: 500;
  font-size: 14px;
}
</style>
