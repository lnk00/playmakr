<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Track, Artist } from '../../../../../shared/models/spotify.model';
import HomeController from './P-Home.controller';

const tracks: Ref<Track[] | undefined> = ref([]);
const artists: Ref<Artist[] | undefined> = ref([]);

const homeController = new HomeController(useRouter());
homeController.getTopItems().subscribe((data) => {
  tracks.value = data.tracks;
  artists.value = data.artists;
});
</script>

<template>
  <div>
    <div>HOME</div>
    <div v-for="track in tracks" :key="track.rank">
      {{ track.name }}
    </div>
    <div v-for="artist in artists" :key="artist.rank">
      {{ artist.name }}
    </div>
  </div>
</template>

<style lang="scss">
@import './P-Home.scss';
</style>
