<template>
  <div class="rounded-[25px] bg-[#0E092C] p-[32px]">
    <section class="bg-white rounded-[25px] p-[32px]">
      <header>
        <div class="flex flex-col lg:flex-row gap-[32px] justify-between">
          <div
            class="flex flex-col justify-between gap-[32px] lg:max-w-[470px] lg:text-left"
          >
            <h2 class="text-[32px] text-center capitalize w-[100%]">
              Chicken and Vegetable Quinoa Bowl
            </h2>
            <p class="text-[18px]">
              It sounds like you could use a comforting and energizing dish to
              refuel your body after a long day of work. How about a hearty and
              nutritious Chicken and Vegetable Quinoa Bowl? This dish is packed
              with protein, healthy fats, and complex carbohydrates to replenish
              your energy levels and keep you feeling satisfied. Here's the
              breakdown of its nutrition content:
            </p>
            <div class="flex">
              <home-rating-icon v-for="(icon, i) in 5" :key="i" />
            </div>

            <!-- <home-re-run-icon /> -->
          </div>
          <div class="mx-[auto] lg:mx-0">
            <nuxt-img src="image-frame.png" width="410" height="332" />
          </div>
        </div>

        <home-food-info />
      </header>

      <article>
        <div class="mt-[64px] flex flex-col gap-[34px]">
          <hr />
          <h3 class="text-center lg:text-left uppercase text-[32px]">
            nutrition
          </h3>
          <div
            class="flex flex-col items-center gap-[16px] lg:flex-row lg:justify-between lg:px-[62px]"
          >
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
          <h3 class="text-center lg:text-left uppercase text-[32px]">
            Ingredients
          </h3>
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
          <h3 class="text-center lg:text-left uppercase text-[32px]">
            Why this dish will help you?
          </h3>
          <p class="text-[18px]">
            This Chicken and Vegetable Quinoa Bowl is an excellent choice when
            you're feeling weak and exhausted because it provides a balanced
            combination of protein, carbohydrates, and healthy fats to replenish
            your energy levels. Quinoa is a nutrient-rich whole grain that's
            high in protein and fiber, helping to sustain energy levels. The
            lean chicken breast offers a good source of protein for muscle
            repair and recovery. Additionally, the colorful array of vegetables
            provides essential vitamins, minerals, and antioxidants to support
            overall health and well-being. Overall, this dish will help you feel
            nourished, revitalized, and ready to tackle whatever comes your way!
          </p>
          <p class="text-[18px]">
            Bon appétit! We hope you enjoy this delicious and nutritious meal
          </p>
        </div>
      </article>
    </section>
  </div>
</template>
