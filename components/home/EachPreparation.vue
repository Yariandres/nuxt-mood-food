<script setup lang="ts">
defineProps<{
  item: string;
  index: number;
}>();
</script>
<template>
  <div
    :class="{ 'bg-[#E2F5F3]': index % 2 === 0 }"
    class="flex justify-between py-[16px] px-[20px] rounded-[5px]"
  >
    <label class="text-[18px]" :for="`item-${index}`">
      {{ index + 1 }}. {{ item }}
    </label>
    <input type="checkbox" :id="`item-${index}`" />
  </div>
</template>
