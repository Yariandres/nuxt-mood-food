<script lang="ts" setup>
defineProps<{
  ingredient: string;
  index: number;
}>();
</script>
<template>
  <hr class="color-[#F2F2F2]" />
  <p class="text-[18px] flex items-center gap-[16px]">
    <span
      class="bg-[#48B4A6] text-lime-50 rounded-full w-[28px] h-[28px] flex justify-center items-center"
      >{{ index + 1 }}</span
    >
    {{ ingredient }}
  </p>
</template>
