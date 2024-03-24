<template>
  <router-link :to="`/product-details/${cards.id}`" class="divslider">
    <figure>
      <img :src="cards.major_image.url" :alt="cards.name" class="imgSlider" />
    </figure>
    <h3>{{ cards.title }}</h3>
    <p>
      <span :style="{ color: 'red' }">(%{{ cards.discount }})</span>
      <span :style="{ color: '#989898' }">--></span>
      <del :style="{ color: '#989898' }">{{ cards.price }}</del>
    </p>
    <strong>{{ cards.price }}<span class="fw">تومان</span></strong>
  </router-link>
</template>

<script setup>
let props = defineProps({
  cards: Object,
});
</script>

<style scoped>
.divslider {
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background: #fff2f8;
}
.imgSlider {
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s ease-in;
}
.imgSlider:hover {
  transform: scale(0.9);
}
.fw {
  font-weight: 200;
}
</style>