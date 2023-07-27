<template>
  <div>
    <div class="flex gap-4 justify-between items-center">
      <div class="flex gap-4">
        <img
          :src="`../../src/assets/images/${product.img}`"
          alt=""
          class="flex justify-center items-center w-[350px] h-[300px]"
        />
        <div class="flex flex-col gap-2.5 justify-center items-start">
          <div>{{ product.title }}</div>
          <div>{{ product.price }} руб.</div>
        </div>
      </div>
      <div class="flex flex-col gap-2 items-center justify-center text-[#fff]">
        <button
          class="px-10 py-1.5 w-[150px] bg-[#d9534f] hover:bg-[#dc3545] duration-300"
          type="button"
          @click="makeOrder(product)"
        >
          Заказать
        </button>
        <button
          class="px-10 py-1.5 w-[150px] bg-[#ccc] hover:bg-[#808080] duration-300"
          type="button"
          @click="toBasket(product)"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    makeOrder(product) {
      this.$emit("make-order", product);
    },
    toBasket(product) {
      this.$emit("to-basket", product);
    },
  },
};
</script>
<style scoped></style>
