<script setup lang="ts">
import HomeController from './P-Home.controller';

const homeController = new HomeController();
</script>

<template>
  <div class="split-container">
    <div class="left-split">
      <div class="header">
        <div class="icon-container">
          <img src="../../../assets/images/logo.png" alt="logo" />
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div class="right-split" :ref="(el) => {homeController.setPanelRef(el as HTMLElement)}">
      <div class="split-btn" v-on:click="homeController.onPanelClick">
        <i class="im im-x-mark" :ref="(el) => homeController.setPanelBtnRef(el as HTMLElement)"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './P-Home.scss';
</style>
