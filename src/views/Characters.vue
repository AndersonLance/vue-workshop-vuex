<template>
  <b-row class="py-3">
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <template v-else>
      <b-col cols="3" v-for="character in characters" :key="character.id">
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
          :class="{colored: isCharacterInFavorites(character.id)}"
        >
          <b-card-text>
            {{ character.location.name }}
          </b-card-text>
          <b-button 
            variant="info" 
            :disabled="isCharacterInFavorites(character.id)"
            @click="addToFavorites(character)">Add to favorites</b-button>
        </b-card>
      </b-col>
    </template>
  </b-row>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  inject: ['baseUrl'],
  computed: {
    ...mapState('char', {
      characters: state => state.characters,
      isLoading: state => state.isLoading
    }),
    ...mapGetters(['isCharacterInFavorites'])
  },
  methods: {
    ...mapActions(['addToFavorites'])
  }
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
