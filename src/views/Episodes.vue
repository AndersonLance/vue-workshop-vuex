<template>
  <b-row>
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-table v-else striped hover :items="episodes" :fields="fields"></b-table>
  </b-row>
</template>

<script>
import axios from 'axios';

export default {
  inject: ['baseUrl'],
  data() {
    return {
      fields: ['id', 'name', 'air_date', 'episode'],
      episodes: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    axios
      .get(this.baseUrl + '/episode')
      .then((res) => {
        this.episodes = res.data.results;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
