<template>
  <div class="screen"><span>100</span></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Screen extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  .screen {
    @extend %innerShadow;
    padding: 12px 5px 12px 0;
    font-size: 32px;
    font-family: Consolas, monospace;
    text-align: right;

  }
</style>