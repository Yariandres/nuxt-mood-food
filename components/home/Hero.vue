<template>
  <div
    class="flex flex-col md:flex-row text-center md:text-left pl-[30px] pb-[62px] md:flex-row md:justify-between lg:gap-[128px]"
  >
    <h1
      class="text-[32px] md:text-[42px] lg:text-[62px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-green-300 max-w-[419px]"
    >
      Food to Mood With MOOBO
    </h1>

    <div class="flex flex-col gap-[16px] pr-[30px] w-[100%]">
      <label class="text-lime-50" for="search">How do you feel today?</label>
      <div class="bg-white h-[55px] text-left rounded-[55px] relative">
        <input
          class="outline-none h-full w-full pl-[20px] rounded-[55px] text-[12px] font-thin"
          type="text"
          id="search"
          placeholder="Find Great Food"
        />
        <div
          class="bg-red-500 w-[41px] h-[40px] rounded-[35px] flex justify-center items-center absolute right-[5px] top-[50%] transform translate-y-[-50%]"
        >
          <home-search-icon />
        </div>
      </div>
      <p class="text-lime-50 uppercase mt-[10px] uppercase font-thin">
        Your Mood Translated to food
      </p>
    </div>
  </div>
</template>
