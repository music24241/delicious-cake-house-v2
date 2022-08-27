<template>
  <div>
    <div class="shop-banner"></div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-3">
          <div class="accordion accordion-flush" id="shopCategory">
            <div
              class="accordion-item"
              v-for="(category, idx) in categoryList"
              :key="idx"
            >
              <h2 class="accordion-header" :id="`shopCategory${idx}`">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#shopCategory${idx}`"
                  :aria-expanded="idx === 0"
                  :aria-controls="`shopCategory${idx}`"
                >
                  {{ category.title }}
                </button>
              </h2>
              <div
                :id="`shopCategory${idx}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`shopCategory${idx}`"
                :show="idx === 0"
                data-bs-parent="#shopCategory"
              >
                <div class="accordion-body">
                  <ul>
                    <li v-for="(subCategory, idx) in category.list" :key="idx">
                      {{ subCategory }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Collapse } from "bootstrap";
import { onMounted, ref } from "vue";

const categoryList = ref([
  { title: "蛋糕", list: ["a", "b", "c"] },
  { title: "糖果", list: ["dd", "cc", "aa"] },
  { title: "鬆餅", list: ["dd", "dd", "dd"] },
]);

onMounted(() => {
  const collapseElementList = document.querySelectorAll(".collapse");
  [...collapseElementList].map((collapseEl) => new Collapse(collapseEl));
});
</script>
