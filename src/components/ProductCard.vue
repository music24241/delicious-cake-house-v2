<template>
  <div class="card border-0 box-shadow h-100 product-card">
    <img
      :src="product.imageUrl"
      class="card-img-top product-card-img"
      :alt="product.title"
    />
    <div class="card-body">
      <RouterLink
        to="/"
        class="card-title d-block text-center fs-4 fw-bold text-dark text-decoration-none"
        >{{ product.title }}</RouterLink
      >
      <p class="card-text mb-4">
        {{ product.description }}
      </p>
      <div
        class="text-end text-muted text-decoration-line-through product-card-title-origin-price"
      >
        NT{{ product.origin_price }}
      </div>
      <div
        class="fw-bold d-flex justify-content-between align-items-center fs-5"
      >
        <span>售價</span>
        NT{{ product.price }}
      </div>
    </div>
    <div class="card-footer border-top-0 padding-top-0 bg-transparent">
      <button v-if="product.is_enable" class="btn btn-outline-success w-100">
        立即選購
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </button>

      <button v-else class="btn btn-outline-secondary w-100 disabled">
        敬請期待
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  product: {
    type: Object,
    default: null,
  },
});
</script>
