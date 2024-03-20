<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="text-center relative">
    <div
      class="bg-[#0E092C] text-lime-50 border-4 border-teal-500/100 rounded-full w-[115px] h-[115px] flex flex-col justify-center items-center"
    >
      <p class="text-[14px]">{{ icon }}</p>
      <p class="text-[14px] font-thin">550</p>
    </div>
  </div>
</template>
