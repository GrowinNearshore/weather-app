

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //apiKey: "96c849b57a7617baf26c1f072673c0c5",
    apiKey: "b6907d289e10d714a6e88b30761fae22",
    cityName: "",
    countryCode: "",
    weatherType: "Temperature",
    cityInfo: ""
  },
  getters: {
    weatherType: state => {
      return state.weatherType;
    },
    cityName: state => {
      return state.cityName;
    },
    countryCode: state => {
      return state.countryCode;
    },
    apiKey: state => {
      return state.apiKey;
    },
    cityInfo: state => {
      return state.cityInfo;
    }   
  },
  mutations: {
		setWeatherType: (state, payload) => {
			state.weatherType = payload;
    },
    setCityName: (state, payload) => {
      state.cityName = payload;
    },
    setCountryCode: (state, payload) => {
      state.countryCode = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
