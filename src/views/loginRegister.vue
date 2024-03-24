<template>
  <!-- moile -->
  <div v-if="showSection == 'getMobile'" class="form">
    <router-link to="/" class="backToHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.454"
        height="19.373"
        viewBox="0 0 18.454 19.373"
        data-v-1b0be74c=""
      >
        <path
          id="Union_5"
          data-name="Union 5"
          d="M1981.5,442l-8.5,9,8.5-9-8.5-9,8.5,9,8.5-9-8.5,9,8.5,9Z"
          transform="translate(-1972.273 -432.313)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        ></path>
      </svg>
    </router-link>
    <form
      @submit.prevent="checkAndSendMobile()"
      id="getMobile"
      class="formLogin"
    >
      <h3>به فروشگاه الینور خوش آمدید</h3>
      <label for="">لطفا برای ادامه شماره همراه خود را وارد نمایید.</label
      ><br />
      <div class="divInputTel d-f">
        <span>
          <svg
            data-v-623614ae=""
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="gray"
            viewBox="0 0 16 16"
            class="bi bi-person"
            data-v-1b0be74c=""
          >
            <path
              data-v-623614ae=""
              fill="gray"
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              data-v-1b0be74c=""
            ></path>
          </svg>
        </span>
        <input
          name="mobile"
          v-model="mobile"
          type="text"
          placeholder="شماره موبایل خود را وارد کنید"
          class="inputLoginTel"
        />
      </div>
      <br />
      <button :class="{ disable: disableBTN == true }" class="btnGoTONextForm">
        ورود
      </button>
    </form>
  </div>
  <!-- password -->
  <div v-else-if="showSection == 'passWordForm'" class="form">
    <router-link to="/" class="backToHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.454"
        height="19.373"
        viewBox="0 0 18.454 19.373"
        data-v-1b0be74c=""
      >
        <path
          id="Union_5"
          data-name="Union 5"
          d="M1981.5,442l-8.5,9,8.5-9-8.5-9,8.5,9,8.5-9-8.5,9,8.5,9Z"
          transform="translate(-1972.273 -432.313)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        ></path>
      </svg>
    </router-link>
    <form @submit.prevent="checkAndLogin()" id="passWordForm" class="formLogin">
      <label for="">لطفابرای ادامه رمز عبور خود را وارد کنید</label><br />
      <input
        name="password"
        type="password"
        placeholder="لطفا رمز عبور خود را وارد کنید"
        class="divInputpassword"
      />
      <button
        :class="{ disable: disableBTN == true }"
        class="btnGoTONextForm"
        :style="{ 'margin-top': '20px' }"
      >
        ورود
      </button>
    </form>
    <div class="DivHelp">
      <button @click="showOneTimePassword()">ورود با رمز یکبار مصرف</button>
      <button @click="showForgotPassword()">فراموشی رمز عبور</button>
    </div>
  </div>
  <!-- one time password -->
  <div v-else-if="showSection == 'oneTimePassword'" class="form">
    <router-link to="/" class="backToHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.454"
        height="19.373"
        viewBox="0 0 18.454 19.373"
        data-v-1b0be74c=""
      >
        <path
          id="Union_5"
          data-name="Union 5"
          d="M1981.5,442l-8.5,9,8.5-9-8.5-9,8.5,9,8.5-9-8.5,9,8.5,9Z"
          transform="translate(-1972.273 -432.313)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        ></path>
      </svg>
    </router-link>
    <form
      id="oneTimePassword"
      class="formLogin"
      @submit.prevent="checkPassAndLog()"
    >
      <h3>ورود به الینور</h3>
      <label for="">
        کد 5 رقمی ارسال شده به شماره همراه خود را وارد کنید! </label
      ><br />
      <input
        type="password"
        placeholder="لطفا رمز عبور یکبارمصرف پیامک شده را وارد کنید"
        class="divInputpassword"
      />
      <button class="btnGoTONextForm" :style="{ 'margin-top': '20px' }">
        تایید کد
      </button>
    </form>
  </div>
  <!-- forget password -->
  <div v-else class="form">
    <router-link to="/" class="backToHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.454"
        height="19.373"
        viewBox="0 0 18.454 19.373"
        data-v-1b0be74c=""
      >
        <path
          id="Union_5"
          data-name="Union 5"
          d="M1981.5,442l-8.5,9,8.5-9-8.5-9,8.5,9,8.5-9-8.5,9,8.5,9Z"
          transform="translate(-1972.273 -432.313)"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        ></path>
      </svg>
    </router-link>
    <form
      id="forgetPassword"
      class="formLogin"
      @submit.prevent="checkPassAndLog()"
    >
      <h3>ورود به الینور</h3>
      <label for="">
        کد 5 رقمی ارسال شده به شماره همراه خود را وارد کنید! </label
      ><br />
      <input
        type="password"
        placeholder="لطفا رمز عبور یکبارمصرف پیامک شده را وارد کنید"
        class="divInputpassword"
      />
      <button class="btnGoTONextForm" :style="{ 'margin-top': '20px' }">
        تایید کد
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUser } from "@/store/user.js";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
let mobile = ref(null);
let router = useRouter();
let disableBTN = ref(false);
let showSection = ref("getMobile");
let store = useUser();
function checkAndSendMobile() {
  let fd = new FormData(document.forms["getMobile"]);
  disableBTN.value = true;
  axios
    .post("customer/register-login", fd)
    .then((res) => {
      disableBTN.value = false;
      showSection.value = "passWordForm";
    })
    .catch((error) => {
      disableBTN.value = false;

      for (const key in error.response.data.errors) {
        error.response.data.errors[key].forEach((err) => {
          toast.error(err, { theme: "dark" });
        });
      }
    });
}
function checkAndLogin() {
  let fd = new FormData(document.forms["passWordForm"]);
  fd.append("mobile", mobile.value);
  disableBTN.value = true;
  axios
    .post("customer/login", fd)
    .then((res) => {
      disableBTN.value = false;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.data.data.access_token}`;
      document.cookie = `token=${res.data.data.data.access_token}`;
      store.$state.user = res.data.data.data.user;
      toast.success("خوش آمدید", { theme: "dark" });
      setTimeout(() => {
        router.push("/");
      }, 3000);
    })
    .catch((error) => {
      disableBTN.value = false;
      for (const key in error.response.data.errors) {
        error.response.data.errors[key].forEach((err) => {
          toast.error(err, { theme: "dark" });
        });
      }
    });
}

let resCode = ref(null);
function checkPassAndLog() {
  let oneTime = new FormData(document.forms["oneTimePassword"]);
  oneTime.append("mobile", mobile.value);
  let forgot = new FormData(document.forms["forgetPassword"]);
  forgot.append("mobile", mobile.value);
  if (resCode.value == oneTime) {
    setInterval(toast.success("خوش آمدید", { theme: "dark" }), 3000);
    router.push("/");
  }
  if (resCode.value == forgot) {
    alert("ok");
  }
}
function showOneTimePassword() {
  let oneTime = new FormData();
  oneTime.append("mobile", mobile.value);
  showSection.value = "oneTimePassword";
  axios
    .post("customer/send/token", oneTime)
    .then((res) => {
      resCode.value = res;
      console.log(resCode);
    })
    .catch((error) => {
      console.log(error);
    });
}
function showForgotPassword() {
  let forgot = new FormData();
  forgot.append("mobile", mobile.value);
  showSection.value = "forgetPassword";
  axios
    .post("customer/send/token", forgot)
    .then((res) => {
      resCode.value = res;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<style>
.backToHome {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
.form {
  border: 2px solid #e3e3e3;
  box-shadow: 0 0 5px;
  width: 400px;
  height: 330px;
  margin: 0 auto;
  transform: translateY(50%);
  padding: 10px;
}
.formLogin {
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.disable {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
.divInputTel {
  width: 70%;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
}
.divInputpassword {
  height: 40px;
  width: 70%;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
}
.inputLoginTel {
  border: none;
  width: 100%;
}
.DivTopLogin {
  justify-content: space-between;
}
.btnGoTONextForm {
  border-radius: 5px;
  background-color: #e35f83;
  color: #fff;
  font-size: 15px;
  padding: 6px 24px;
}
.DivHelp {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.DivHelp button:hover {
  color: #e35f83;
}
</style>