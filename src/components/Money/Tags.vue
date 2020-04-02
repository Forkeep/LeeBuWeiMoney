<template>
  <div class="tags">
    <div class="placeholder"></div>
    <ul>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>食</li>
      <li>食</li>
      <li>衣</li>
      <li>食</li>
      <li>食</li>
      <li>衣</li>
      <li>食</li>
      <li>食</li>
      <li>衣</li>
      <li>食</li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  .tags {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .placeholder{
      flex-grow: 1;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        margin: 3px 5px 3px 5px;
        background-color: #ddd;
        width: 50px;
        max-height: 24px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

</style>