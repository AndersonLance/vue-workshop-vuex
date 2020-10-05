<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Rick & Morty</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'episodes' }">Episodes</b-nav-item>
        <b-nav-item :to="{ name: 'characters' }">Characters</b-nav-item>
        <b-nav-item :to="{ name: 'favorites' }">Favorites</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Episodes from './views/Episodes.vue';
export default {
  components: {
    Episodes,
  },
  methods: {
    ...mapActions('char', ['fetchCharacters'])
  },
  created() {
    this.fetchCharacters();
  }
};
</script>

<style>
.spinner {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
