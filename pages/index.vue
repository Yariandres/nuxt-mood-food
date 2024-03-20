<template>
  <main
    class="bg-gradient-to-b from-lime-200 to-indigo-950 px-[36px] md:px-[84px] pt-[40px] h-[100vh] overflow-y-auto"
  >
    <section>
      <div
        class="bg-[#0E092C] px-[40px] pt-[40px] rounded-[25px] flex flex-col gap-[32px]"
      >
        <div class="flex justify-between">
          <p class="text-lime-50">MOOBO</p>
          <di class="flex">
            <p class="text-lime-50">Login</p>
            <span class="text-white px-[14px]">/</span>
            <p class="text-lime-50">Sign up</p>
          </di>
        </div>

        <home-hero />
      </div>
    </section>

    <div class="flex gap-[10px] mt-[10px]">
      <div class="rounded-[25px] bg-[#0E092C] p-[32px]">
        <section class="bg-white rounded-[25px] p-[32px]">
          <header>
            <div class="flex gap-[32px] justify-between">
              <div
                class="flex flex-col justify-between gap-[32px] max-w-[370px]"
              >
                <h2 class="text-[32px] capitalize">
                  Chicken and Vegetable Quinoa Bowl
                </h2>
                <p class="text-[18px]">
                  It sounds like you could use a comforting and energizing dish
                  to refuel your body after a long day of work. How about a
                  hearty and nutritious Chicken and Vegetable Quinoa Bowl? This
                  dish is packed with protein, healthy fats, and complex
                  carbohydrates to replenish your energy levels and keep you
                  feeling satisfied. Here's the breakdown of its nutrition
                  content:
                </p>
                <div class="flex">
                  <home-rating-icon v-for="(icon, i) in 5" :key="i" />
                </div>

                <!-- <home-re-run-icon /> -->
              </div>
              <div>
                <nuxt-img src="image-frame.png" width="410" height="332" />
              </div>
            </div>

            <home-food-info />
          </header>

          <article>
            <div class="mt-[64px] flex flex-col gap-[34px]">
              <hr />
              <h3 class="uppercase text-[32px]">nutrition</h3>
              <div class="flex justify-between px-[62px]">
                <home-nutrition-info
                  v-for="icon in [
                    'calories',
                    'sodium',
                    'fat',
                    'carbs',
                    'potassium',
                  ]"
                  :key="icon"
                  :icon="icon"
                />
              </div>
              <hr />
              <h3 class="uppercase text-[32px]">Ingredients</h3>
              <div class="flex flex-col gap-[16px]">
                <home-each-ingredient
                  v-for="(ingredient, i) in [
                    '2 slices of bread',
                    '1 avocado',
                    '2 eggs',
                    '1/2 cup of cherry tomatoes',
                    '1/4 cup of feta cheese',
                    '1/4 cup of fresh basil',
                    '1/4 cup of olive oil',
                    '1/4 cup of balsamic vinegar',
                    '1/4 cup of honey',
                    '1/4 cup of dijon mustard',
                  ]"
                  :key="i"
                  :ingredient="ingredient"
                  :index="i"
                />
              </div>

              <hr />
              <h3 class="uppercase text-[32px]">Preparation</h3>
              <div class="flex flex-col gap-[16px]">
                <home-each-preparation
                  v-for="(item, i) in [
                    'Preheat the oven to 425°F. Line a baking sheet with parchment paper.',
                    'Cut the avocado in half and remove the pit.',
                    'Crack an egg into each avocado hal',
                    'Place the avocado halves on the prepared baking sheet.',
                    'Bake for 15 minutes, or until the egg is cooked to your liking.',
                  ]"
                  :key="i"
                  :item="item"
                  :index="i"
                />
              </div>

              <hr />
              <h3 class="uppercase text-[32px]">
                Why this dish will help you?
              </h3>
              <p class="text-[18px]">
                This Chicken and Vegetable Quinoa Bowl is an excellent choice
                when you're feeling weak and exhausted because it provides a
                balanced combination of protein, carbohydrates, and healthy fats
                to replenish your energy levels. Quinoa is a nutrient-rich whole
                grain that's high in protein and fiber, helping to sustain
                energy levels. The lean chicken breast offers a good source of
                protein for muscle repair and recovery. Additionally, the
                colorful array of vegetables provides essential vitamins,
                minerals, and antioxidants to support overall health and
                well-being. Overall, this dish will help you feel nourished,
                revitalized, and ready to tackle whatever comes your way!
              </p>
              <p class="text-[18px]">
                Bon appétit! We hope you enjoy this delicious and nutritious
                meal
              </p>
            </div>
          </article>

          <footer></footer>
        </section>
      </div>
      <aside class="flex flex-col gap-[32px]">
        <div class="bg-[#0E092C] rounded-[25px] p-[32px] min-w-[270px]">
          <div class="flex flex-col gap-[32px]">
            <div class="bg-[#fff] rounded-[8px] p-[22px]">
              <div class="flex flex-col gap-[16px]">
                <div
                  class="bg-[#D9D9D9] rounded-[25px] h-[34px] w-[77px] flex justify-center items-center"
                >
                  <p class=" ">ADS</p>
                </div>

                <div class="font-thin flex flex-col gap-[16px]">
                  <p class="text-[18px] font-thin">Try Google Adsense</p>
                  <p class="text-[18px] font-normal">GET PAID BY IMPRESSIONS</p>
                  <p class="text-[18px]">Sponsored Ads Here</p>
                  <p class="text-right font-normal underline">Learn more</p>
                </div>
              </div>
            </div>

            <div class="bg-[#fff] rounded-[8px] p-[22px]">
              <div class="flex flex-col gap-[16px]">
                <div class="flex flex-col gap-[16px]">
                  <h3 class="text-[14px] text-center">Trending Moods Today</h3>
                </div>
                <hr />
                <p class="text-[16px] hover:underline">loving joy</p>
                <p class="text-[16px] hover:underline">Happy Nappy</p>
                <p class="text-[16px] hover:underline">Bored</p>
                <p class="text-[16px] hover:underline">Starving Marvin</p>
                <p class="text-[16px] hover:underline">Feeling Spicy</p>
              </div>
            </div>
            <div class="bg-[#fff] rounded-[8px] p-[22px]">
              <div class="flex flex-col gap-[16px]">
                <div class="flex flex-col gap-[16px]">
                  <h3 class="text-[14px] text-center">
                    Trending cooking books on Amazon
                  </h3>
                </div>
                <hr />
                <p class="text-[16px] hover:underline">Cooks for love</p>
                <p class="text-[16px] hover:underline">Just Cook</p>
                <p class="text-[16px] hover:underline">Fast Dinners</p>
                <p class="text-[16px] hover:underline">Chicken tonight</p>
                <p class="text-[16px] hover:underline">No time to cook</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#0E092C] rounded-[25px] p-[22px] text-lime-50">
          <div class="flex flex-col gap-[16px]">
            <div class="flex flex-col gap-[16px]">
              <h3 class="text-[14px] text-center">Subscribe</h3>
            </div>
            <div class="flex flex-col text-[14px] gap-[22px]">
              <input
                type="text"
                placeholder="Your name"
                class="bg-[#4F34F5] h-[40px] border-[1px] border-[#4F34F5] w-[100%] rounded-[8px] pl-[10px] opacity-[20%] text-[#fff]"
              />
              <input
                type="text"
                placeholder="Your email"
                class="bg-[#4F34F5] h-[40px] border-[1px] border-[#4F34F5] w-[100%] rounded-[8px] pl-[10px] opacity-[20%]"
              />
            </div>
            <button
              class="bg-[#14B8A6] h-[40px] rounded-[8px] hover:bg-[#72CABF] transition-all duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </div>
      </aside>
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
