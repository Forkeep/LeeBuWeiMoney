<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class LayoutNav extends Vue {
  }
</script>

<style lang="scss" scoped>
.layout-wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content{
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
  }

}
</style>