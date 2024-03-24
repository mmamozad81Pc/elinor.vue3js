<template>
  <main class="mainPopulerList">
    <div class="mainDive">
      <div class="d-f PopulerListToped">
        <div class="d-f PopulerListTitle">
          <span>
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-019b9639=""
            >
              <path
                d="M23.533 17.8739L4.02002 19.4869L0.402954 17.8739L4.02002 16.261L23.533 17.8739Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M17.896 29.454L4.40308 23.7949L2.703 21.49L5.75305 21.6749L17.896 29.454Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M17.896 6.2959L4.40308 11.9548L2.703 14.2599L5.75305 14.0748L17.896 6.2959Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M8.56909 35.7499L2.21399 27.5709L2.06299 25.5178L3.94604 26.6638L8.56909 35.7499Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M8.56909 0L2.21399 8.17798L2.06299 10.231L3.94604 9.08496L8.56909 0Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
            </svg>
          </span>
          <h3 class="textPopulerList">
            دسته بندی های <span class="textPopulerList2">محبوب</span>
          </h3>
          <span>
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-019b9639=""
            >
              <path
                d="M0.402954 17.8739L19.9159 19.4869L23.533 17.8739L19.9159 16.261L0.402954 17.8739Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M6.03992 29.454L19.5328 23.7949L21.2329 21.49L18.1829 21.6749L6.03992 29.454Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M6.03992 6.2959L19.5328 11.9548L21.2329 14.2599L18.1829 14.0748L6.03992 6.2959Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M15.3668 35.7499L21.7219 27.5709L21.8729 25.5178L19.9899 26.6638L15.3668 35.7499Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
              <path
                d="M15.3668 0L21.7219 8.17798L21.8729 10.231L19.9899 9.08496L15.3668 0Z"
                fill="#F05454"
                data-v-019b9639=""
              ></path>
            </svg>
          </span>
        </div>
        <a href="" class="btnAll"> مشاهده محصولات </a>
      </div>
      <div class="PopulerListSlider">
        <swiper
          v-if="sliderList"
          :loop="true"
          :slides-per-view="6"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="sliderListPop"
        >
          <swiper-slide v-for="(item, index) in sliderList" :key="index">
            <div class="divslider">
              <figure>
                <img
                  :src="item.image.url"
                  :alt="item.title"
                  class="imgSlider"
                />
              </figure>
              <div class="titleSlider">
                <p>{{ item.title }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import axios from "axios";
import { ref, computed } from "vue";
import { HomePageStore } from "@/store/home";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let store = HomePageStore();
    let sliderList = computed(() => {
      return store.getSliderListPopuler;
    });
    if (sliderList.value == null) {
      store.getSliderListPopulerFromServer();
    }
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      sliderList,
    };
  },
};
</script>

<style scoped>
/* title */
.mainPopulerList {
  width: 88%;
  margin: auto;
}
.mainDive {
  margin-top: 80px;
}
.PopulerListToped {
  align-items: center;
  justify-content: space-between;
}
.PopulerListTitle {
  align-items: center;
  gap: 22px;
}
.textPopulerList {
  transform: translateY(-7px);
  color: #e35f83;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 0;
}
.textPopulerList2 {
  font-size: 22px;
  font-weight: 400;
}
.btnAll {
  border: 1px solid #e35f83;
  border-radius: 10px;
  padding: 6px 16px;
  line-height: 2;
  transition: all 0.3s;
  font-size: 14px;
  color: #e35f83;
}
.btnAll:hover {
  background: #e35f83;
  color: white;
}
/* slider */
.PopulerListSlider {
  padding: 16px 5px;
  margin-top: 20px;
}
.divslider {
  margin: 1px 4px;
  cursor: pointer;
}
.imgSlider {
  width: 100%;
  border-radius: 26px;
}
.titleSlider {
  text-align: center;
  padding: 8px 0;
  font-weight: 900;
  transition: 0.3s;
}
.titleSlider:hover {
  background-color: #e35f83;
  color: white;
  border-radius: 30px;
}
@media only screen and (max-width: 580px) {
  .btnAll {
    display: none;
  }
  .PopulerListToped {
    justify-content: center;
  }
}
</style>
