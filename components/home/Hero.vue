<template>
  <div class="flex pl-[30px] justify-between pb-[62px]">
    <h1
      class="text-[62px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-green-300 max-w-[419px]"
    >
      Food to Mood With MOOBO
    </h1>
    <div class="flex flex-col gap-[16px] pr-[30px]">
      <label class="text-lime-50" for="search">How do you feel today?</label>
      <div class="bg-white h-[55px] w-[523px] rounded-[55px] relative">
        <input
          class="outline-none h-full w-full pl-[20px] rounded-[55px]"
          type="text"
          id="search"
          placeholder="Find Great Food"
        />
        <div
          class="bg-red-500 w-[61px] h-[47px] rounded-[35px] flex justify-center items-center absolute right-[5px] top-[50%] transform translate-y-[-50%]"
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
