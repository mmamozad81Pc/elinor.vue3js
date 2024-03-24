<template>
  <sliderTop />
  <populer-list />
  <mostdiscount />
  <productsElinor />
  <webLog />
</template>

<script setup>
import sliderTop from "@/components/home/sliderTop.vue";
import populerList from "@/components/home/populerList.vue";
import mostdiscount from "@/components/home/mostdiscount.vue";
import productsElinor from "@/components/home/productsElinor.vue";
import webLog from "@/components/home/webLog.vue";
import { defineComponent } from "vue";
defineComponent(sliderTop, populerList, mostdiscount, productsElinor, webLog);
</script>