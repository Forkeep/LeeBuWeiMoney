<template>
<div></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Screen extends Vue {
    output = '0';
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";


</style>