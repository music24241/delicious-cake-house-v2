<template>
  <main>
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 col-lg-6">
          <swiper
            :pagination="{
              clickable: true,
              bulletActiveClass: 'home-swiper-pagination-active',
            }"
            :navigation="true"
            :autoplay="{
              delay: 7500,
              disableOnInteraction: false,
            }"
            :loop="true"
            :effect="'fade'"
            :modules="swiperModules"
            class="home-swipper"
          >
            <swiper-slide
              class="home-swipper-slide"
              v-for="(slider, idx) in sliders"
              :key="idx"
            >
              <img :src="slider.imgSrc" :alt="slider.title" class="rounded" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-12 col-lg-6">
          <h3
            ref="homeAnnoListTitle"
            class="fs-5 py-3 text-center bg-light fw-bold mb-3"
          >
            <i class="bi bi-bookmark-star-fill text-danger"></i> 最新消息
          </h3>
          <div class="list-group home-anno-list">
            <a
              v-for="(anno, idx) in annos"
              :key="idx"
              href="#"
              class="list-group-item list-group-item-action home-anno-list-item"
            >
              <div class="d-flex align-items-center">
                <i
                  v-if="anno.star"
                  class="bi bi-star-fill text-warning me-2"
                ></i>
                <div class="flex-grow-1">
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">
                      {{ anno.title }}
                    </h6>
                    <small>{{ anno.date }}</small>
                  </div>
                  <small class="text-secondary">{{ anno.content }}</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <h3 class="fs-5 py-3 text-center bg-light fw-bold mb-4">
        <i class="bi bi-bookmark-heart-fill text-danger"></i> 精選商品
      </h3>
      <div class="home-product">
        <ProductCard
          v-for="(product, idx) in products"
          :key="idx"
          :product="product"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";

const annos = ref([
  {
    title: "更多優惠組合即將上市",
    star: true,
    content: "持續推出更多優惠組合，路過千萬別錯！！",
    date: "2022-08-24",
  },
  {
    title: "歡慶開幕",
    star: true,
    content: "重大改版！！！",
    date: "2022-08-24",
  },
  {
    title: "Morbi leo risus",
    star: false,
    content: "",
    date: "2022-08-24",
  },
  {
    title: "Porta ac consectetur ac",
    star: false,
    content: "",
    date: "2022-08-24",
  },
  {
    title: "Vestibulum at eros",
    star: false,
    content: "",
    date: "2022-08-24",
  },
  {
    title: "Cras justo odio",
    star: false,
    content: "",
    date: "2022-08-24",
  },
  {
    title: "Cras justo odio",
    star: false,
    content: "",
    date: "2022-08-22",
  },
  {
    title: "Cras justo odio",
    star: false,
    content: "",
    date: "2022-07-24",
  },
]);

const products = ref([
  {
    category: "麵包",
    description: "外皮酥脆搭配剛剛好的起司內餡，讓人一口接著一口 !",
    id: "-Lfo6YHsn28OBphxkEi3",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1558873752556.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q9yWYID16jxTAfu2AjAvhMld%2Fw6dn9IzLnSJHk3Ei7jrkd4KGHive6baKwZlSARxakyzwKMd388oqTu%2FIK3u7hRngVG%2F7WWTTkNrVjNOqtBlJ2qF7CujDNCS64y5Ao1kjI9QpZNSQUL7c3zL3wTqT7xX%2Bsp88lJhuv4B92%2FcS3e0gejCdwkXVKDViJqDTsFMcIf%2BZU42MkJwTawsL5GU9PIVJv4IQBo3%2FRdCwIlZ8lnBHa9OAQsz0KB%2FxZz%2BVoMd7kqcsgwxxE6oGp%2BsVD1aQRuCa21IpPWhKUq9FtcBXkiBRyPihRePMd1pJSthuyZygmvgJ5wp3%2BQVelwLt6ZsoA%3D%3D",
    is_enable: true,
    origin_price: "50",
    price: "45",
    title: "起司麵包",
    unit: "塊",
    num: 1,
  },
  {
    category: "生日蛋糕",
    description: "好吃的蛋糕配上繽紛蠟燭，讓你過個難忘的生日！",
    id: "-LXWTVwMwLW8DfioVo15",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1548897255696.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a9DXA7d%2ByN33xaXec%2BZC6YtMCdCxrYp7MIhrHy84lM4hR8q%2FEtxttp2StTJjxY8LnFNY9tRjrevMwnoFs9GKz9hG3I3nE0C4nFd6Ls5%2Fi6efe12Y%2BJALCHE0te5cLBPnwZ3GCbuRuwXj5BhA6LWcYNyOKk9lki%2BCSqa%2FcjfMXYaxfV%2Bw2vJi2ysfSU%2FVG3QG%2BxQEbWJG7UWXCAkSTP6w3vp5I0osAm4jTA5M98iXVh2bQEQHI3zWvUH3UvTD33vGS6jVkfJA6dJbWiM58%2FdzEFuEow6RaSXet1IJ2Z2G7S4GxogrkewLLbtbJ6zhxVzkxx8huSV%2FiBYJC3ODMszoXQ%3D%3D",
    is_enable: true,
    num: 2,
    origin_price: "600",
    price: "560",
    title: "繽紛生日蛋糕",
    unit: "塊",
  },
  {
    category: "精緻蛋糕",
    description: "杯子但上灑上如彩虹的糖霜，為您的生活添加多種樂趣~",
    id: "-LXWSWe8HU64RFXVIVq2",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1548896717457.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jOTpBYhiJQQTgqOrOlRprqCB7Eu8xO6VAOWp7jTcR1RZZYIvzLRf6c5PaLELsz3S12ZETuaXZZATB%2FDpjI%2Bcm8y8wH0T%2FrzbAqFWbthI1ZHezPEGTckeKU6CpFFM9ZvRhgRkjUqC715jlX8Z5U4D%2FxWbfrvd69mlFbHVLZ%2BQgZFTNSbTvaJY0CDmh%2BfuEMmbFM9%2FEvGGAWNrbhxNn8nxpxm%2F1gR%2FjxCOXm2LEAET6IYwnO8Kk4qw81i3Qa5hCZFX4TsImJ0qWEa%2FPZsOsL0TnRJAOfvxMQRS5PR89KlADAb0HiC%2FIwwYdfmpNjRky0S8NpjaOUOKbpuFxpXeGNlXNA%3D%3D",
    is_enable: true,
    num: 3,
    origin_price: "50",
    price: "40",
    title: "彩虹杯子蛋糕",
    unit: "個",
  },
  {
    category: "餅乾",
    description: "酥脆餅乾裹上厚厚一層雪霜，彷彿置身國外~",
    id: "-LXWR0BNG9c6tx1j3dF_",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1548896403678.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FuxJdOerItUcNptjoSOHTdQrHzX2L2jpD%2FQxTutRdsV0dMAARmqOU0jg0dX%2BGof2dXdl7GQLQT9rMh1Qz73Ya8veSIjWUV4xteDIYxF1%2F603VSD4KshilnBFPuPz7pmYsmkj5a%2B58ecS9YuxO3kG2cUe8wong33r1%2BGw%2BnTtxCEMscBtgZS6MI5icHADKqt817vyo9WNhaJz359Md6CpSLFncyWKT7KhYX6UGT8dMDNPfCLk%2BfKtAz%2BQBHSbecVqxMDz6zkD0spCo3XVuW9ZfT%2BtcIp7BCn1DEGIOIuu6FXbSldAYforKhEjk%2BOzqe8Kt2yqztf%2BlCKUCbLBL%2BBIGw%3D%3D",
    is_enable: true,
    num: 4,
    origin_price: "80",
    price: "70",
    title: "雪餅乾",
    unit: "包",
  },
  {
    category: "麵包",
    description: "好吃的牛角麵包，酥酥脆脆味道剛好！",
    id: "-LX2t6pRShtEW8Tpat9o",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1548400971590.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q8tLqoRUob3i7jDu0ZRMJNU7njv8pthvycHhI9b37t%2BFLyPeBD7WzWefNOyyO1cSk1OrqIuoDu9X9tgrkV%2BYzApSYybWNdjlW1fnrPET%2FaL%2FW2Ha1V1pkzJa4CrdmeptJ8OWybUP0fCvBQImHVc%2FiWjaP%2Fo3l8HbU5zburpzANbSaOCjuO5KPd047BTxI5eH6G2nbdHZ6UNnYLVVnKhgZTVxQt3NIhIE%2BAMn0ZQ0dqqpdY0bRzS3DX6P78MTsNZKsvxChd4L%2BWH%2FzJDXOK2x%2FlKz4alXEcYEk7Z9Sbdiu1pAINms5iAqz7lvADyhqOybtYizdgPojKWMbHOjd9wmZg%3D%3D",
    is_enable: true,
    num: 5,
    origin_price: "50",
    price: "45",
    title: "牛角麵包",
    unit: "塊",
  },
  {
    category: "生日蛋糕",
    description: "在黑夜裡綻放光芒的生日蛋糕，讓你成為全場焦點！",
    id: "-LX2sti8SSZ_HEY_zQfK",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1548400871244.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VD4ffyyuZj83eI0QLMr%2FQswYJdsu90KpUGSPiDrK7%2BUsqBDZkV3akSgrpfSlt9%2FJ0lu%2BDxhX2pz726%2FNycsioZLlO7j3QX3VDC%2BkDsWTzt9zAFCGdWl3Fmsu%2Fd2xI6ZE%2FphlJXVddUO0xT9fZzmdB0HNm3h%2BY6eSBm4V1PvBR9yledCAHOYWjv1ca1S8e1EKyAOd7SVCfxx7HNJMtgmYaGqDZKgWhBPatR50qPgf4gNKLzeMXOv3RAGJAuCH0vKV6QiZjMyPc1N9UiFRXe6NR6KFBOj7HrWkdmrR0XqnrRruaPlm8iFXgWjya1xpiSMBksTtuEydwF4a882MQD3HzA%3D%3D",
    is_enable: true,
    num: 6,
    origin_price: "500",
    price: "440",
    title: "巧克生日蛋糕",
    unit: "塊",
  },
  {
    category: "餅乾",
    description: "蔓越莓配上酥酥脆脆的鬆餅，美味早餐get！",
    id: "-LWKiJL4M58z9ILK-B1Q",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1547626372837.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=e1OBlaXcpcye%2F37i5Ijiwdim4UGLhLzy9XNKI2xoKHpB3g4PmlgaHY5%2B3KhWots7Xhn3FfrB4GP5Yp%2BGNAqjlq4oHS0t%2BzHBAnWMjk%2FAbkO5Fny%2FRxOlCebcnhAcw7kmshLZHEKraMCM6RdMlo3HdLRG0%2FOdPLWN1DJRyfXka6UbaVWRD%2BSox5fNE6h2iRf5zozAa5lOsMdnNreUEZ5Bjwq%2FD%2BBeEIF3oYyfimztoReT5jxEDWKAw16BNuPNu8iZdAhsa8Y%2BPeHnQ3bedmeJYmWkaIxfpZTXDiwbtxUM6xV8UKnSIuood2m5pXEfbsloFZ9qXjzZIneryB7jIGXbvQ%3D%3D",
    origin_price: "75",
    price: "70",
    title: "蔓越莓鬆餅",
    unit: "塊",
    num: 7,
  },
  {
    category: "精緻蛋糕",
    description: "杯子蛋糕搭配戀愛配色，可愛兼顧美味！",
    id: "-LVCOlF8j_G2ZZEoFWkC",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1547625838800.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=o1iAFRbu383CvoTLcwU4rtJTH3K6i5am6KwvVddQ6yAH9QCuDP8%2F8Qk%2F%2BenRe7ftJyRT27OfLOgljIv%2F81AayNrbGMDqRewqwrijFYTtAi0YQHyw6PMUI7H7L5OWEHVqS0A7GPK9uloXQEnI%2B%2Bm%2FEmK4BfkNzrXmpI91VZTpBoM%2BHMhb%2F%2BaH%2BncpZzg%2FAqyXx6oLGHfHCT2sIxpg1L9v0nCqn0txRP0nsYS6d8CXBdYk%2Bf9JhXdQlPVe9sDIZq7rbXA7KK%2BVeWujCqC7XxrfJgNEzv1dlgRCvz2EoGR2OSeoFv0dc726e3Tdul8y%2FyNI48wnZT4sF9ELislvG%2BMfMQ%3D%3D",
    is_enable: true,
    num: 8,
    origin_price: "60",
    price: "40",
    title: "戀愛杯子蛋糕",
    unit: "杯",
  },
  {
    category: "精緻蛋糕",
    description: "簡單又不失時尚感的精緻蛋糕！",
    id: "-LVCOjgC3_vu-9K53G5q",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1547625962871.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VpC%2FZg2M4V0trFkyVUTExPuNz%2FhBWUkHEvspHTlG0XXT4XCmLH683H9ZM99r%2FHolU30alx7QQCYNBU4fc%2FgT0uK9nFY9fuftt9pkvZJiy6Ih6VaKGK4%2BzQrUA%2FMTiwbnNB7dX4iFMdqu%2BGMvv3oeSeue8lEe2kSDYUcYdLCpOfiHJWt4BzGIarac97nz68mIdkaGBarXHdA%2BwmnX0FbY7tw0V9tOqKeudEByrafztJ7k16GJAa5cahfNbROEom0JJZrLD6Agw0ZWYNo5gm9WgP9ceu0lpzMJW8AV9x9vm%2BXFeZcwj7LYVOVrKrjeyrm98C1TEv7oaUGkS1yoXMrHrQ%3D%3D",
    is_enable: true,
    num: 9,
    origin_price: "500",
    price: "400",
    title: "時尚焦糖蛋糕",
    unit: "塊",
  },
  {
    category: "精緻蛋糕",
    content: "",
    description: "雪白外觀內用巧克力襯托，再用新鮮水果點綴，極品！",
    id: "-LUnO0JvjiVs9TCcbH8K",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/mu24241%2F1547626068149.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bIA7sR6WEKMvgjrj2XXr6djWqI2gMQcUWaLG7wCNgrd7q6JwU%2FNQ43vBeTQnQSJPt3tXJYfkYT0jvRlZJffVmzmHEQ6f9eQzCg02xTfxr9gSqmKVA0v8VXTQUyZB34ssM2XE2SrV3h5Qd00GbNs4OFzx%2F0lPOmqoE2vfX%2BdXC%2FGGAijCNQySLCvNKXo6BehwDsS%2FkZ60%2FtSVMD%2FavciZUH1FuFKzwhGIUgKfh3xCYdz8J5qT0UddJJUJgOQ6JEqN3P2YS1peXMFcOIzZqnIQS6x%2F6Up0UcGZNqnHIX4Iq80cxo%2BDdHgFPGyXue3ZmtUyGJeCSeM%2FFqvs2MPg3z0f%2BA%3D%3D",
    is_enable: true,
    num: 10,
    origin_price: "450",
    price: "430",
    title: "雪白蛋糕",
    unit: "塊",
  },
]);

const sliders = ref([
  {
    title: "a",
    imgSrc:
      "https://images.unsplash.com/photo-1475855841503-917d97ca77b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "b",
    imgSrc:
      "https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "c",
    imgSrc:
      "https://images.unsplash.com/photo-1511772455886-b8d0a6690ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
]);

const swiperModules = [Autoplay, Pagination, Navigation];
</script>
