<script setup lang="ts">
import LoginController from './P-Login.controller';

const controller = new LoginController();
</script>

<template>
  <div class="split-container">
    <div class="left-split">
      <div class="icon-container">
        <img src="./../../../assets/images/logo.png" alt="logo" />
      </div>
      <div class="container">
        <div class="width-limiter">
          <h1 class="brand-name">{{ controller.localizationService.strings.login.brand }}</h1>
          <h2 class="brand-motto">{{ controller.localizationService.strings.login.motto }}</h2>
          <div class="btn" v-on:click="controller.onClickConnect">
            <span class="label">{{ controller.localizationService.strings.login.connect }}</span>
            <img src="./../../../assets/images/spotify.png" alt="spotify logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="right-split">
      <img src="./../../../assets/images/illustration.svg" alt="music illustration" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './P-login.scss';
</style>
