<template>
  <div v-if="products" class="DivProducts">
    <div class="TopPageProduct d-f">
      <router-link to="/">فروشگاه الینور</router-link>
      <span class="p">></span>
      <a href="">همه محصولات</a>
      <span class="p">></span>
      <router-link to="/product-details/:id" class="p">{{
        products.title
      }}</router-link>
    </div>
    <div class="DetailsProduct d-f">
      <div class="ProductImgDiv d-f">
        <div class="otherProductDiv">
          <div class="" v-for="(pic, index) in products.images" :key="index">
            <figure>
              <img :src="pic.url" class="otherImgDiv" />
            </figure>
          </div>
        </div>
        <div class="mainProductImgDiv">
          <figure>
            <img :src="products.major_image.url" class="mainProductImg" />
          </figure>
        </div>
      </div>
      <div class="DetailsProductsDiv">
        <div class="titleProductDiv d-f">
          <h2>{{ products.title }}</h2>
          <div class="productBtn d-f">
            <div class="comparBtn d-f">
              <span> مقایسه </span>
              <div>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 16 16"
                    width="13px"
                    height="13px"
                    style="fill: black"
                  >
                    <g id="surface10948020">
                      <path
                        d="M 14.09375 1.199219 C 14.480469 1.199219 14.800781 1.519531 14.800781 1.90625 L 14.800781 14.09375 C 14.800781 14.480469 14.480469 14.800781 14.09375 14.800781 L 1.90625 14.800781 C 1.519531 14.800781 1.199219 14.480469 1.199219 14.09375 L 1.199219 1.90625 C 1.199219 1.519531 1.519531 1.199219 1.90625 1.199219 L 14.09375 1.199219 M 14.09375 0.800781 L 1.90625 0.800781 C 1.296875 0.800781 0.800781 1.296875 0.800781 1.90625 L 0.800781 14.09375 C 0.800781 14.703125 1.296875 15.199219 1.90625 15.199219 L 14.09375 15.199219 C 14.703125 15.199219 15.199219 14.703125 15.199219 14.09375 L 15.199219 1.90625 C 15.199219 1.296875 14.703125 0.800781 14.09375 0.800781 Z M 14.09375 0.800781 "
                        style="
                          stroke: none;
                          fill-rule: nonzero;
                          fill: rgb(126, 126, 126);
                          fill-opacity: 1;
                        "
                      ></path>
                    </g></svg
                ></span>
              </div>
            </div>
            <button class="btnLike">
              <span>
                <svg
                  class="heartIconSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.66"
                  height="20.827"
                  viewBox="0 0 21.66 20.827"
                  data-v-942cf548=""
                >
                  <path
                    data-name="Icon ionic-ios-heart-empty"
                    d="M19.2,3.938h-.052A5.924,5.924,0,0,0,14.2,6.645,5.924,5.924,0,0,0,9.259,3.938H9.206A5.887,5.887,0,0,0,3.375,9.821,12.674,12.674,0,0,0,5.864,16.73,43.615,43.615,0,0,0,14.2,24.764a43.615,43.615,0,0,0,8.341-8.034,12.674,12.674,0,0,0,2.489-6.909A5.887,5.887,0,0,0,19.2,3.938Zm2.166,11.934a39.935,39.935,0,0,1-7.164,7.06,39.994,39.994,0,0,1-7.164-7.065A11.233,11.233,0,0,1,4.833,9.821,4.418,4.418,0,0,1,9.217,5.4h.047a4.365,4.365,0,0,1,2.14.562,4.55,4.55,0,0,1,1.583,1.484,1.463,1.463,0,0,0,2.447,0,4.6,4.6,0,0,1,1.583-1.484,4.365,4.365,0,0,1,2.14-.562H19.2a4.418,4.418,0,0,1,4.384,4.42A11.375,11.375,0,0,1,21.369,15.871Z"
                    transform="translate(-3.375 -3.938)"
                    fill="black"
                    data-v-942cf548=""
                  ></path>
                </svg>
              </span>
            </button>
            <a href="" class="btnSendPeople">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="mr-2 bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#444"
                    fill-width="1.5"
                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                  ></path></svg
              ></span>
            </a>
          </div>
        </div>
        <div class="categoryDetails d-f">
          <span>دسته:</span>
          <div
            v-for="(categ, index) in products.categories"
            :key="index"
            class="categoryDetails2"
          >
            <span>{{ categ.title }},</span>
          </div>
        </div>
        <hr class="hr" />
        <div class="colorProducts">
          <span>رنگ ها:</span>
          <div class="divColors d-f">
            <div
              v-for="(variable, index) in products.varieties"
              :key="index"
              class="divColors2"
            >
              <div
                :style="{ 'background-color': variable.color.code }"
                class="divColorIteem"
              ></div>
              <div>{{ variable.color.name }}</div>
            </div>
          </div>
        </div>
        <div>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              data-v-5f664554=""
            >
              <path
                id="Icon_awesome-ruler-vertical"
                data-name="Icon awesome-ruler-vertical"
                d="M3.281,8.125a.156.156,0,0,1-.156-.156V7.656A.156.156,0,0,1,3.281,7.5H5V6.25H3.281a.156.156,0,0,1-.156-.156V5.781a.156.156,0,0,1,.156-.156H5V4.375H3.281a.156.156,0,0,1-.156-.156V3.906a.156.156,0,0,1,.156-.156H5V2.5H3.281a.156.156,0,0,1-.156-.156V2.031a.156.156,0,0,1,.156-.156H5V.625A.625.625,0,0,0,4.375,0H.625A.625.625,0,0,0,0,.625v8.75A.625.625,0,0,0,.625,10h3.75A.625.625,0,0,0,5,9.375V8.125Z"
                fill="#f05454"
                data-v-5f664554=""
              ></path></svg
          ></span>
          <span> راهنمای سایز </span>
        </div>
        <hr class="hr" />
        <div class="priceProducts d-f">
          <div class="priceBox d-f">
            <span style="color: gray">قیمت:</span>
            <span style="font-weight: bolder">{{ products.price }}</span>
            <span style="color: gray">تومان</span>
          </div>
          <button class="btnSabadProduct">افزودن به سبدخرید</button>
        </div>
        <div class="informatinProduct">
          <div>
            <span style="color: #e35f83">مدل لباس : </span>
            <span>{{ modelProduct }}</span>
          </div>
          <div>
            <span style="color: #e35f83">کاربرد : </span>
            <span>{{ karbordProduct }}</span>
          </div>
          <div>
            <span style="color: #e35f83">استایل : </span>
            <span>{{ styleProduct }}</span>
          </div>
          <button style="color: #e35f83">موارد بیشتر ></button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loaderProductDetails">
    <figure class="loaderFigureProductDetails">
      <img
        src="@/assets/img/Ellipsis-1s-200px.svg"
        class="loaderImgProductDetails"
      />
    </figure>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
let modelProduct = ref(null);
let karbordProduct = ref(null);
let styleProduct = ref(null);
let products = ref(null);
let route = useRoute();
axios.get(`front/products/${route.params.id}`).then((respons) => {
  products.value = respons.data.data.product;
  modelProduct.value = respons.data.data.product.specifications[0].pivot.value;
  karbordProduct.value =
    respons.data.data.product.specifications[1].pivot.value;
  styleProduct.value = respons.data.data.product.specifications[2].pivot.value;
});
</script>

<style scoped>
/* loader */
.loaderProductDetails {
  width: 100%;
}
.loaderFigureProductDetails {
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.loaderImgProductDetails {
  width: 100px;
}
/* products */
.DivProducts {
  width: 100%;
  height: 600px;
}
.TopPageProduct {
  width: 88%;
  margin: 0 auto;
  margin-bottom: 50px;
  gap: 5px;
}
.DetailsProduct {
  width: 88%;
  margin: 0 auto;
}
.p {
  color: #e35f83;
}
.ProductImgDiv {
  width: 40%;
}
.DetailsProductsDiv {
  width: 57%;
}
/* title */
.titleProductDiv {
  height: 50px;
  justify-content: space-between;
  align-items: center;
}
.productBtn {
  align-items: center;
  gap: 20px;
}
.comparBtn {
  border: 1px solid #ebebeb;
  padding: 3px 5px;
  align-items: center;
  gap: 7px;
  border-radius: 5px;
  cursor: pointer;
}
.btnLike {
  border: 1.5px solid #ebebeb;
  padding: 5px 7px;
  border-radius: 5px;
  position: relative;
  width: 36px;
  height: 36px;
  z-index: 1;
}
.btnSendPeople {
  border: 1.5px solid #ebebeb;
  padding: 5px 7px;
  border-radius: 5px;
}
.categoryDetails {
  margin-top: 5px;
  color: #e35f83;
}
.categoryDetails2 {
  padding-left: 5px;
  color: #8e8e8e;
}
.hr {
  margin-top: 10px;
  color: #c2c2c2;
}
/* color */
.colorProducts {
  margin-top: 20px;
  margin-bottom: 20px;
}
.divColorIteem {
  height: 50px;
  text-align: center;
}
.divColors {
  flex-direction: row;
  gap: 10px;
}
.divColors2 {
  width: 60px;
  text-align: center;
  background-image: radial-gradient(#fafafa, #f4f4f4, #e1e1e1);
  border: 1px solid black;
  padding: 5px;
}
/* price */
.priceProducts {
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
}
.priceBox {
  background-color: #f5f5f5;
  padding: 8px 16px;
  border-radius: 35px;
}
.btnSabadProduct {
  background-color: #e35f83;
  padding: 8px 16px;
  border-radius: 35px;
  color: white;
}
/* information */
.informatinProduct {
  margin-top: 20px;
  padding: 10px 0px;
}
/* image */
.otherProductDiv {
  width: 30%;
  height: 70%;
  overflow: auto;
}
.mainProductImg {
  width: 80%;
  height: 80%;
}
.otherImgDiv {
  max-width: 80%;
  max-height: 80%;
}
</style>
