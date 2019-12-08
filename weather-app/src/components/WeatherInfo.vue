
<template>
   <div class="box-area weather-area">
      <h2>Weather information for {{cityName}}</h2>

      <div class="details">
         <ul>
            <li>
               Weather: {{weatherDetails.description}}
            </li>
            <li>
               Humidity: {{weatherDetails.humidity}}%
            </li>
            <li>
               Pressure: {{weatherDetails.pressure}}mb
            </li>
            <li>
               Temperature: {{weatherDetails.temp}}ºC
            </li>
            <li>
               Temperature max.: {{weatherDetails.tempMax}}ºC
            </li>
            <li>
               Temperature min.: {{weatherDetails.tempMin}}ºC
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
// 
export default {
   data() {
      return {
         weatherDetails: {
            description: "-",
            humidity: "-",
            pressure: "-",
            temp: "-",
            tempMin: "-",
            tempMax: "-" 
         },
      }
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
      },
      countryCode() {
         return this.$store.getters.countryCode;
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
         let cCode = "";
         if(this.countryCode != "") {
            cCode = ","+this.countryCode;
         }
         this.axios.get("https://openweathermap.org/data/2.5/weather?q="+this.cityName+cCode+"&appid="+this.apiKey).then((res) => {
            console.log(res.data);
            this.weatherDetails.description = res.data.weather[0].description;
            this.weatherDetails.humidity = res.data.main.humidity;
            this.weatherDetails.pressure = res.data.main.pressure;
            this.weatherDetails.temp = res.data.main.temp;
            this.weatherDetails.tempMax = res.data.main.temp_max;
            this.weatherDetails.tempMin = res.data.main.temp_min;
         }).catch((error)=>{
            console.log(error);
         })
         return true;
      }      
   }   
}
</script>