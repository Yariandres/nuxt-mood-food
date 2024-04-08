<script setup>
import { useCompletion } from 'ai/vue';

const { completion, input, handleSubmit, data } = useCompletion();

console.log(data);
console.log(completion);
</script>

<template>
  <main
    class="bg-gradient-to-b from-lime-200 to-indigo-950 px-[36px] md:px-[84px] pt-[40px] h-[100vh] overflow-y-auto"
  >
    <section>
      <div
        class="bg-[#0E092C] px-[40px] py-[40px] rounded-[25px] flex flex-col gap-[32px]"
      >
        <div class="flex justify-between">
          <p class="text-lime-50">MOOBO</p>
          <div class="flex">
            <p class="text-lime-50">Login</p>
            <span class="text-white px-[14px]">/</span>
            <p class="text-lime-50">Sign up</p>
          </div>
        </div>

        <home-hero :text="'Food to your Mood'" />
        <form @submit.prevent="handleSubmit">
          <ui-base-input
            label="'How do feel today?'"
            v-model="input"
            type="text"
            class="outline-none h-full w-full pl-[20px] rounded-[55px] text-[12px] font-thin"
          />
        </form>
      </div>
    </section>

    <div class="flex flex-col gap-[10px] mt-[10px] xl:flex-row">
      <home-section-left />
      <home-section-aside />
    </div>

    <footer
      class="bg-[#0E092C] mt-[10px] rounded-t-[25px] pt-[90px] pb-[50px] px-[40px]"
    >
      <div class="flex justify-between">
        <p class="text-lime-50">MOOBO</p>
        <p class="text-lime-50">Login</p>
      </div>
    </footer>
  </main>
</template>
