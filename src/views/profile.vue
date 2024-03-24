<template>
  <div class="MainDivProfile" v-if="user">
    <section class="SectainDetailsProfile">
      <div class="DIvTelTitle d-f">
        <h4>{{ user.mobile }}</h4>
      </div>
      <div class="DIvWallet d-f">
        <h5>موجودی کیف پول:</h5>
        <div>
          <span>{{ user.wallet.balance }} تومان</span>
          <button class="btnWallet">+</button>
        </div>
      </div>
      <nav>
        <ul class="UlMenoProfile d-f">
          <li>
            <butten class="BTnMenoProfile">
              <span
                ><svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-dcfc4990=""
                >
                  <circle
                    cx="11.5789"
                    cy="7.27803"
                    r="4.77803"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path></svg
              ></span>
              <span>حساب کاربری</span>
            </butten>
          </li>
          <li>
            <butten class="BTnMenoProfile">
              <span
                ><svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-dcfc4990=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.23913 10.3913C4.25354 6.15071 7.70289 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0043 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25652 16.0522C5.01448 14.4294 4.3093 12.4597 4.23913 10.4174L4.23913 10.3913Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <circle
                    cx="11.9174"
                    cy="10.5391"
                    r="2.46087"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></circle></svg
              ></span>
              <span> لیست آدرس ها</span>
            </butten>
          </li>
          <li>
            <butten class="BTnMenoProfile">
              <span
                ><svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-dcfc4990=""
                >
                  <path
                    d="M15.7162 16.2234H8.4962"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    d="M15.7162 12.0369H8.4962"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    d="M11.2513 7.86008H8.4963"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9086 2.74979C15.9086 2.74979 8.2316 2.75379 8.2196 2.75379C5.4596 2.77079 3.7506 4.58679 3.7506 7.35679V16.5528C3.7506 19.3368 5.4726 21.1598 8.2566 21.1598C8.2566 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35679C20.4156 4.57279 18.6926 2.74979 15.9086 2.74979Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path></svg
              ></span>
              <span> پیگیری سفارش</span>
            </butten>
          </li>
          <li>
            <butten class="BTnMenoProfile">
              <span
                ><svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-dcfc4990=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    d="M15.7393 7.05301C16.8046 7.39331 17.5615 8.34971 17.6561 9.47499"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path></svg
              ></span>
              <span>لیست علاقه مندی ها</span>
            </butten>
          </li>
          <li>
            <butten class="BTnMenoProfile">
              <span
                ><svg
                  id="walletSvg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 969.486 969.486"
                  xml:space="preserve"
                  data-v-dcfc4990=""
                >
                  <g data-v-dcfc4990="">
                    <g data-v-dcfc4990="">
                      <path
                        fill="currentColor"
                        d="M806.582,235.309L766.137,87.125l-137.434,37.51L571.451,9.072L114.798,235.309H0v725.105h907.137V764.973h62.35v-337.53
			h-62.352V235.309H806.582z M718.441,170.63l17.654,64.68h-52.561h-75.887h-126.19l111.159-30.339l66.848-18.245L718.441,170.63z
			 M839.135,892.414H68V522.062v-129.13v-10.233v-69.787v-9.602h35.181h27.538h101.592h409.025h75.889h37.43h35.242h35.244h13.994
			v51.272v72.86h-15.357h-35.244h-87.85H547.508h-55.217v27.356v75.888v8.758v35.244v35.244v155.039h346.846v127.441H839.135z
			 M901.486,696.973h-28.352h-34H560.291V591.375v-35.244v-35.244v-23.889v-1.555h3.139h90.086h129.129h56.492h34h4.445h23.904
			V696.973z M540.707,100.191l21.15,42.688l-238.955,65.218L540.707,100.191z"
                        data-v-dcfc4990=""
                      ></path>
                      <polygon
                        fill="currentColor"
                        points="614.146,564.57 614.146,576.676 614.146,631.152 680.73,631.152 680.73,564.57 658.498,564.57 		"
                        data-v-dcfc4990=""
                      ></polygon>
                    </g>
                  </g></svg
              ></span>
              <span>کیف پول</span>
            </butten>
          </li>
          <li>
            <butten class="BTnMenoProfile red">
              <span
                ><svg
                  id="signOutSvg"
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-dcfc4990=""
                >
                  <path
                    d="M15.016 7.38951V6.45651C15.016 4.42151 13.366 2.77151 11.331 2.77151H6.45597C4.42197 2.77151 2.77197 4.42151 2.77197 6.45651V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    d="M21.8095 12.0214H9.76849"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path>
                  <path
                    d="M18.8812 9.10632L21.8092 12.0213L18.8812 14.9373"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-v-dcfc4990=""
                  ></path></svg
              ></span>
              <span> خروج از حساب کاربری</span>
            </butten>
          </li>
        </ul>
      </nav>
    </section>
    <div class="SectainDisplayProfile"></div>
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
import { ref, computed } from "vue";
import { useUser } from "@/store/user.js";
import { useRouter } from "vue-router";
import { getCookie } from "@/assets/libs/functions.js";
let store = useUser();
let rout = useRouter();
let user = computed(() => {
  return store.getUser;
});
if (!getCookie("token")) {
  alert("اجازه دسترسی ندارید");
  rout.push("/login-register");
}
</script>

<style scoped>
.MainDivProfile {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  background: #00000010;
  margin-top: 23px;
  border-radius: 10px;
  padding: 1rem;
}
.SectainDetailsProfile {
  box-shadow: 0 0 40px #00000014;
  padding: 1rem;
  background: white;
  color: #000;
  border-radius: 10px;
  height: max-content;
}
.SectainDisplayProfile {
  box-shadow: 0 0 40px #00000014;
  border-radius: 12px;
  background: white;
  color: #000;
}
/* section Details */
.DIvTelTitle {
  margin-top: 1.5rem;
  justify-content: center;
}
.DIvWallet {
  margin: 0 auto;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-direction: column;
  border-bottom: 1px solid #80808094;
}
.btnWallet {
  background: #121314;
  color: #fff;
  padding: 0;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  font-size: 22px;
  margin: 4px;
  border: none;
}
.UlMenoProfile {
  padding-top: 0.5rem;
  padding-bottom: 3rem;
  flex-direction: column;
  gap: 15px;
}
.BTnMenoProfile {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.BTnMenoProfile:hover {
  padding-right: 10px;
}
.red {
  color: red;
}
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
</style>