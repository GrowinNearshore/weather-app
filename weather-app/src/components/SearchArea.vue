
<template>
   <div class="box-area search-area">
      <div class="item">
         <label>City Name:</label>
         <input type="text" placeholder="Add City Name..." v-model="cityName" />
      </div>
      <div class="item">
         <label>Country Code:</label>
         <input type="text" placeholder="Add Country Code..." v-model="countryCode" />         
      </div>
      <button v-on:click="setData()">Update Data</button>    
   </div>
</template>

<script>
export default {
   data() {
      return {
         cityName: "",
         countryCode: ""
      }
   },
   methods: {
      setData() {
         this.$store.commit('setCityName', this.cityName);
         this.$store.commit('setCountryCode', this.countryCode);
      }
   }
}
</script>