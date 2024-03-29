<script lang="ts" setup>
defineProps<{
    title: string
}>();
</script>

<template>
    <div class="bg-primary-light px-2 py-1.5 rounded-2xl">
        <span class="text-xs font-bold text-black-900">{{ title }}</span>
    </div>
</template>