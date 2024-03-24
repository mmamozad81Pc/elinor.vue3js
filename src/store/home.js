import { defineStore } from 'pinia'
import axios from 'axios'
import {useUser} from "./user.js"
export const HomePageStore = defineStore('HomePage', {
    state:() => ({
        menoHeader:null,
        sliderHome:null,
        SliderListPopuler:null,
        sliderCardMostDiscount:null,
    }),
    getters:{
        getMenoHead(state){
            return state.menoHeader
        },
        getSliderHome(state){
            return state.sliderHome
        },
        getSliderListPopuler(state){
            return state.SliderListPopuler
        },
        getSliderCard(state){
            return state.sliderCardMostDiscount
        },
    },
    actions:{
        getMenoHeadFromServer(){
            let userStore=useUser()
            axios.get("front/home?variety_ids=&prices=&quantities=")
            .then((response) => {
                this.menoHeader=response.data.data.response
                userStore.$state.user=response.data.data.response.user.user
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getHomeSliderFromServer(){
            axios.get("all/sliders")
            .then((response) => {
                this.sliderHome=response.data.data.sliders
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getSliderListPopulerFromServer(){
            axios
            .get("front/home?variety_ids=&prices=&quantities=")
            .then((response) => {
                this.SliderListPopuler=response.data.data.response.special_categories
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getSliderCardFromServer(){
            axios.get("front/most-discounts")
            .then((response) => {
                this.sliderCardMostDiscount=response.data.data.response.mostDiscount
            })
            .catch((error) => {
              console.log(error);
            });
        },
    }
})
