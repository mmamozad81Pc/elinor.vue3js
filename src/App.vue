<template>
  <Myheader v-if="route.fullPath != '/login-register'" />
  <router-view></router-view>
  <svgProductsGroup v-if="route.fullPath != '/login-register'" />
  <Myfooter v-if="route.fullPath != '/login-register'" />
</template>

<script setup>
import Myheader from "@/components/shared/Myheader.vue";
import Myfooter from "@/components/shared/myfooter.vue";
import svgProductsGroup from "@/components/shared/svgProductsGroup.vue";
import { defineComponent } from "vue";
defineComponent(Myheader, Myfooter, svgProductsGroup);
import { useRoute } from "vue-router";
let route = useRoute();
</script>