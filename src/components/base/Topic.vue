<script lang="ts" setup>
defineProps<{
    title: string
}>();
</script>

<template>
    <div class="bg-primary-light p-2 rounded-2xl">
        <span class="text-sm font-bold">{{ title }}</span>
    </div>
</template>