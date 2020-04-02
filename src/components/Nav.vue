<template>
  <nav class="nav">
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/money" class="item"  active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item"  active-class="selected">
      <Icon name="statistics"/>
      分析
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';


  @Component
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    .item {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding: 4px 0;
      .icon{
        width: 1.6em;
        height: 1.6em;
      }
    }
    .item.selected{
      color: $color-highlight;
    }
  }


</style>