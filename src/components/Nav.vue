<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#money"/>
      </svg>
      money
    </router-link>
    |
    <router-link to="/labels">
      <svg>
        <use xlink:href="#labels"/>
      </svg>
      labels
    </router-link>
    |
    <router-link to="/statistics">
      <svg>
        <use xlink:href="#statistics"/>
      </svg>
      statistics
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import labels from '@/assets/icons/labels.svg';
  import money from '@/assets/icons/money.svg';
  import statistics from '@/assets/icons/statistics.svg';

  console.log(labels);
  console.log(money);
  console.log(statistics);
  import {Component} from 'vue-property-decorator';


  @Component
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }


</style>