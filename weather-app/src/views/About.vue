
<template>
  <main class="today-page">
    <Search />
    <Charts />
  </main>
</template>

<script>
import Search from '@/components/SearchArea.vue';
import Charts from '@/components/ChartArea.vue';

export default {
  components: {
    Search,
    Charts
  }
}
</script>
