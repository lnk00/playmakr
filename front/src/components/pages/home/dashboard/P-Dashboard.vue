<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Track, Artist } from '../../../../../../shared/models/spotify.model';
import DashboardController from './P-Dashboard.controller';

const tracks: Ref<Track[] | undefined> = ref([]);
const artists: Ref<Artist[] | undefined> = ref([]);

const dashboardController = new DashboardController(useRouter());
dashboardController.getTopItems().subscribe((data) => {
  tracks.value = data.tracks.slice(0, 5);
  artists.value = data.artists.slice(0, 5);
});
</script>

<template>
  <div>
    <div class="top-container">
      <div class="header">
        <div class="title">Your Top Artists</div>
        <div class="more">See more</div>
      </div>
      <div class="items-container">
        <div v-for="artist in artists" :key="artist.rank" class="item">
          <div class="img-container">
            <img :src="artist.image" alt="item image" />
          </div>
          <div class="item-title">{{ artist.name }}</div>
          <div class="item-subtitle">{{ artist.followers }} Followers</div>
        </div>
      </div>
    </div>
    <div class="top-container">
      <div class="header">
        <div class="title">Your Top Tracks</div>
        <div class="more">See more</div>
      </div>
      <div class="items-container">
        <div v-for="track in tracks" :key="track.rank" class="item">
          <div class="img-container">
            <img :src="track.image" alt="item image" />
          </div>
          <div class="item-title">{{ track.name }}</div>
          <div class="item-subtitle">{{ track.artist }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './P-Dashboard.scss';
</style>
