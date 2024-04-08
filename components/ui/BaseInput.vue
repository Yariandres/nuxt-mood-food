<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string | number;
}>();
</script>

<template>
  <div class="flex flex-col gap-[16px] pr-[30px] w-[100%]">
    <div class="bg-white h-[55px] text-left rounded-[55px] relative">
      <input
        id="search"
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="
          $emit(
            'update:modelValue',
            ($event.target as HTMLTextAreaElement).value
          )
        "
      />
      <button
        type="submit"
        class="bg-red-500 w-[41px] h-[40px] rounded-[35px] flex justify-center items-center absolute right-[5px] top-[50%] transform translate-y-[-50%]"
      >
        <home-search-icon />
      </button>
    </div>
  </div>
</template>
