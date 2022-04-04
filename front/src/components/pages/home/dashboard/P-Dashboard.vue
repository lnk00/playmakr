<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Track, Artist } from '../../../../../../shared/models/spotify.model';
import UtilsService from '../../../../services/utils/utils.service';
import DashboardController from './P-Dashboard.controller';

const artists: Ref<Artist[] | undefined> = ref([]);
const tracks: Ref<Track[] | undefined> = ref([]);

const displayedArtists: Ref<Artist[] | undefined> = ref([]);
const displayedTracks: Ref<Track[] | undefined> = ref([]);

const dashboardController = new DashboardController(useRouter());
dashboardController.getTopItems().subscribe((data) => {
  artists.value = data.artists;
  tracks.value = data.tracks;

  displayedArtists.value = artists.value.slice(0, 5);
  displayedTracks.value = tracks.value.slice(0, 5);
});

const topArtistsElem: Ref<HTMLElement | undefined> = ref<HTMLElement>();
const topTracksElem: Ref<HTMLElement | undefined> = ref<HTMLElement>();

const isTopTracksDisplayed = ref(true);
const isTopArtistsDisplayed = ref(true);

const isTopTracksFocused = ref(false);
const isTopArtistsFocused = ref(false);

const onMoreArtistsClick = () => {
  isTopTracksDisplayed.value = !isTopTracksDisplayed.value;
  isTopArtistsFocused.value = !isTopArtistsFocused.value;

  if (isTopArtistsFocused.value) {
    displayedArtists.value = artists.value;
  } else {
    displayedArtists.value = artists.value?.slice(0, 5);
  }
};

const onMoreTracksClick = () => {
  isTopArtistsDisplayed.value = !isTopArtistsDisplayed.value;
  isTopTracksFocused.value = !isTopTracksFocused.value;

  if (isTopTracksFocused.value) {
    displayedTracks.value = tracks.value;
  } else {
    displayedTracks.value = tracks.value?.slice(0, 5);
  }
};
</script>

<template>
  <div class="dashboard">
    <TransitionGroup name="fade" class="fade-container">
      <div class="top-container" ref="topArtistsElem" v-if="isTopArtistsDisplayed">
        <div class="header">
          <div class="title">Your Top Artists</div>
          <div class="more" v-on:click="onMoreArtistsClick">{{ isTopArtistsFocused ? 'Show less' : 'See more' }}</div>
        </div>
        <div class="items-container">
          <div v-for="artist in displayedArtists" :key="artist.rank" class="item">
            <div class="img-container">
              <img :src="artist.image" alt="item image" />
              <div class="play-btn">
                <i class="im im-play"></i>
              </div>
            </div>
            <div class="item-infos">
              <div class="item-rank">{{ artist.rank }}.</div>
              <div class="item-titles">
                <div class="item-title">{{ artist.name }}</div>
                <div class="item-subtitle">{{ UtilsService.formatNumber(artist.followers) }} Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-container" ref="topTracksElem" v-if="isTopTracksDisplayed">
        <div class="header">
          <div class="title">Your Top Tracks</div>
          <div class="more" v-on:click="onMoreTracksClick">{{ isTopTracksFocused ? 'Show less' : 'See more' }}</div>
        </div>
        <div class="items-container">
          <div v-for="track in displayedTracks" :key="track.rank" class="item">
            <div class="img-container">
              <img :src="track.image" alt="item image" />
              <div class="play-btn">
                <i class="im im-play"></i>
              </div>
            </div>
            <div class="item-infos">
              <div class="item-rank">{{ track.rank }}.</div>
              <div class="item-titles">
                <div class="item-title">{{ track.name }}</div>
                <div class="item-subtitle">{{ track.artist }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
@import './P-Dashboard.scss';
</style>
