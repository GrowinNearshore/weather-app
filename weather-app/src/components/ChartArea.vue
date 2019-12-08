
<template>
   <div class="box-area chart-area">
      <header>
         <h2>Weather - {{cityName}}</h2>
         <div class="selector">
            <ul>
               <li 
               v-for="(type, index) in selectorTypes" 
               v-bind:key="index" 
               v-bind:class="{'active': type===weatherType }"
               v-on:click="changeWeatherType(type)">
                  {{type}}
               </li>           
            </ul>
         </div>
      </header>
      <highcharts :options="chartOptions"></highcharts>
   </div>
</template>

<script>
import {Chart} from 'highcharts-vue';

export default {
   data() {
      return {
         selectorTypes: ["Temperature", "Windspeed", "Humidity"],
         chartOptions: {
            title: {
               text: ""
            },
            series: [{
               data: [1,2,3] // sample data
            }]
         }
      }
   },

   components: {
      highcharts: Chart
   },

	computed: {
		weatherType() {
			return this.$store.getters.weatherType;
      },
      cityName() {
         return this.$store.getters.cityName;
      },
      apiKey() {
         return this.$store.getters.apiKey;
      }
   },
   watch: {
      cityName: {
         handler(newCityName, oldCityName) {
            console.log({newCityName}, {oldCityName});
            this.getCityData();
            return {newCityName};
         }
      }
   },
   
   methods: {
      changeWeatherType(type) {
         this.$store.commit('setWeatherType', type);
      },
      getCityData() {
         console.log("https://openweathermap.org/data/2.5/forecast?q="+this.cityName+"&appid="+this.apiKey);

         this.axios.get("https://openweathermap.org/data/2.5/weather?q="+this.cityName+"&appid="+this.apiKey).then((res) => {
            console.log(res.data);
         }).catch((error)=>{
            console.log(error);
         })
         return true;
      }      
   }
}
</script>

