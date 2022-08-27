<template>
  <loading v-model:active="isLoading"></loading>

  <header>
    <nav class="navbar navbar-expand-md bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand fw-bold fs-4" to="/">
          <i class="bi bi-house-heart-fill text-success"></i>
          好好吃蛋糕坊
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink to="/products" class="nav-link">商品</RouterLink>
            <RouterLink to="/searchOrder" class="nav-link">訂單查詢</RouterLink>
            <RouterLink to="/login" class="nav-link d-md-none"
              >後台管理</RouterLink
            >
          </div>
        </div>
        <button type="button" class="px-2 border-0 bg-transparent">
          <i class="bi bi-cart4 fs-4 text-secondary"></i>
          <span class="badge rounded-pill bg-success">
            2
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <router-link to="/login" class="d-none d-md-inline-block px-2">
          <i class="bi bi-person-circle fs-4 text-secondary"></i>
        </router-link>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="bg-light text-muted py-5 footer">
    <div class="container">
      <p class="text-center">
        © Copright 2022
        <i
          class="bi bi-house-heart-fill text-success pe-2 ps-1"
          aria-hidden="true"
        ></i
        >Delicious Cake House
      </p>
      <p class="text-center">練習用，無商業用途</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { storeToRefs } from "pinia/dist/pinia";
import statusStore from "./stores/status";

const status = statusStore();

const { isLoading } = storeToRefs(status);
</script>

<style lang="scss">
@import "assets/scss/all";
</style>
