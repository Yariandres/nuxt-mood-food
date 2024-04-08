<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
<template>
  <h1
    class="text-[42px] lg:text-[62px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-green-300"
  >
    {{ text }}
  </h1>
</template>
