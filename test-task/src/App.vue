<template>
  <div id="app">
    <div>
      <div>Список товаров:</div>
      <!-- Вывод товаров -->
      <product-item
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @make-order="MakeOrder"
        @to-basket="ToBasket"
        class="w-[90%] mx-auto"
      ></product-item>

      <!-- Popup заказа -->
      <div
        class="fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,.3)]"
        v-if="showOrderPopup"
      >
        <div
          class="bg-[#3c3c3c] flex justify-center items-center w-full h-full"
        >
          <form
            action="#"
            class="w-[calc(100%-400px)] bg-[#fff] flex flex-col p-10"
          >
            <div class="flex justify-between items-center gap-6">
              <div class="font-bold text-2xl">{{ product.title }}</div>
              <button type="button" @click="closeOrderPopup">&#10006;</button>
            </div>
            <div class="flex gap-10 items-center mt-4">
              <div class="flex flex-col gap-2">
                <div class="w-[200px] h-[200px]">
                  <img
                    :src="`../../src/assets/images/${product.img}`"
                    alt="#"
                    class="flex justify-center items-center w-full h-full"
                  />
                </div>
                <div class="text-[#ff1f46] text-2xl font-bold">
                  {{ product.price }} руб.
                </div>
              </div>
              <div class="flex gap-5 w-full">
                <div class="font-bold">Комментарий к заказу:</div>
                <textarea
                  class="w-full h-[70px] px-1 border border-[#000] bg-[#d3d3d3] text-[#000]"
                ></textarea>
              </div>
            </div>
            <div class="flex gap-7 mt-10">
              <div class="font-medium">Ваш телефон*:</div>
              <div class="flex flex-col gap-7">
                <input
                  class="border border-[#000] p-1 bg-[#d3d3d3] text-[#000]"
                  type="number"
                />
                <button
                  type="submit"
                  class="bg-[#dc143c] hover:bg-[#bf0d31] text-[#fff] py-1.5"
                >
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Popup корзины -->
      <div
        v-if="showBasketPopup"
        class="fixed top-0 right-0 mr-2 max-w-[500px] max-h-[400px] bg-[rgba(255,255,255,.3)]"
      >
        <!-- Header popup -->
        <div
          class="flex justify-between gap-10 text-[#fff] p-2 text-2xl bg-[#a9a9a9]"
        >
          <div>Вы добавили в корзину:</div>
          <button type="button" @click="closeBasketPopup">&#10006;</button>
        </div>

        <!-- Body popup -->
        <div class="flex flex-col gap-6 bg-[#ccc] p-6">
          <div class="flex gap-2">
            <div class="max-w-[150px] max-h-[150px]">
              <img
                :src="`../../src/assets/images/${product.img}`"
                alt="#"
                class="flex justify-center items-center w-full h-full"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <div class="w-[200px]">{{ product.title }}</div>
              <div>{{ product.price }} руб.</div>
            </div>
          </div>
          <button
            type="button"
            class="w-[150px] bg-[#dc143c] hover:bg-[#bf0d31] text-[#fff] py-1.5"
          >
            Перейти в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./components/product-item.vue";
export default {
  name: "App",
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
      showOrderPopup: false,
      showBasketPopup: false,
      product: {
        type: Object,
      },
    };
  },
  methods: {
    MakeOrder(product) {
      this.product = product;
      this.showOrderPopup = true;
    },
    ToBasket(product) {
      this.product = product;
      this.showBasketPopup = true;
    },
    closeOrderPopup() {
      this.showOrderPopup = false;
    },
    closeBasketPopup() {
      this.showBasketPopup = false;
    },
  },
  async created() {
    try {
      const response = await fetch("/api/products.json");
      this.products = (await response.json()).products;
    } catch {}
  },
};
</script>

<style scoped></style>
