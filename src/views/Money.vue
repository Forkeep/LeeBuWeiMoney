<template>
  <LayoutNav class="layout-nav">
    <div class="number-pad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button class="dot">.</button>
    </div>
    <div class="screen"><span>100</span></div>
    <ul class="types">
      <li class="income selected">收入</li>
      <li class="cost">支出</li>
    </ul>
    <div class="notes">
      <label><span class="beizhu"><strong>备注</strong></span><input type="text" placeholder="请在这里输入备注"/>
      </label>
    </div>
    <div class="new">
      <button>新增标签</button>
    </div>
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
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Labels from '@/views/Labels.vue';

  @Component({
    components: {Labels}
  })
  export default class Money extends Vue {
  }
</script>

<style lang="scss">
  .layout-nav .content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  .layout-nav {
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

    .new {
      display: flex;
      padding: 8px 0 8px 10px;

      button {
        border-color: transparent;
        border-bottom: 1px solid #aaa;
        background-color: transparent;
        color: #AAA;
        font-size: 12px;
      }
    }

    .notes {
      width: 100%;
      background-color: #f5f5f5;
      padding: 24px 0 24px 10px;
      display: flex;
      font-size: 14px;

      label {
        flex-grow: 1;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        .beizhu {
        }

        input {
          flex-grow: 1;
          border: 0 solid transparent;
          margin-left: 20px;
          background-color: inherit;

          &::placeholder {
            color: #aaa;
            opacity: 0.9;
          }
        }
      }

    }

    .types {
      background-color: #c4c4c4;
      display: flex;
      align-items: center;

      li {
        padding: 16px 0 16px 0;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        font-size: 24px;
        position: relative;
        &.selected::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #333;
        }
      }

      .income {
      }

      .cost {
      }

    }

    .screen {
      @extend %innerShadow;
      padding: 12px 5px 12px 0;
      font-size: 32px;
      font-family: Consolas, monospace;
      text-align: right;

    }

    .number-pad {
      @extend %clearFix;
      $bg: #f2f2f2;
      button {
        border: 1px solid transparent;
        background-color: transparent;
        width: 25%;
        height: 50px;
        float: left;
        &:nth-child(1){
          background-color: $bg;
        }
        &:nth-child(2),&:nth-child(5){
          background-color: darken($bg,4%);
        }
        &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background-color: darken($bg,8%);
        }
        &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background-color: darken($bg,12%);
        }
        &:nth-child(8),&:nth-child(11){
          background-color: darken($bg,16%);
        }

      }
      .ok{
        height: 100px;
        float: right;
        background-color: darken($bg,24%);
      }
      .zero{
        width: 50%;
        background-color: darken($bg,16%);
      }
      .dot{
        background-color: darken($bg,20%);
      }
    }
  }

</style>