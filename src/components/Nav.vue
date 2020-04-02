<template>
  <div>
    <router-link to="/money">money</router-link>|
    <router-link to="/labels">labels</router-link>|
    <router-link to="/statistics">statistics</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>