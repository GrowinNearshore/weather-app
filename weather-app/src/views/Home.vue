
<template>
  <main class="today-page">
    <Search />
    <Weather />
  </main>
</template>

<script>
import Search from '@/components/SearchArea.vue';
import Weather from '@/components/WeatherInfo.vue';

export default {
  components: {
    Search,
    Weather
  }
}
</script>
