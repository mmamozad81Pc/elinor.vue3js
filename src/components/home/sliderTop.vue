<template>
  <main class="mainSlider">
    <swiper
      v-if="sliderList"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in filterdList" :key="index">
        <img :src="item.image.url" alt="" class="imgSlider" />
      </swiper-slide>
    </swiper>
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
  data() {
    return {
      screenMode: "",
    };
  },
  setup() {
    let store = HomePageStore();
    let sliderList = computed(() => {
      return store.getSliderHome;
    });
    if (sliderList.value == null) {
      store.getHomeSliderFromServer();
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
  methods: {
    checkScreenMode() {
      if (window.innerWidth > 768) {
        this.screenMode = "header";
      } else {
        this.screenMode = "header-mobile";
      }
    },
  },
  computed: {
    filterdList() {
      return this.sliderList.filter((slide) => {
        if (slide.group == this.screenMode) return slide;
      });
    },
  },
  mounted() {
    this.checkScreenMode();
    window.addEventListener("resize", this.checkScreenMode);
  },
};
</script>

<style scoped>
.mainSlider {
  width: 88%;
  margin: auto;
}
.imgSlider {
  width: 100%;
  border-radius: 20px;
}
@media only screen and (max-width: 500px) {
  .mainSlider {
    width: 100%;
  }
  .imgSlider {
    border-radius: 0px;
  }
}
</style>