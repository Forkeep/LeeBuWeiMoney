<template>
  <div>
    <div class="screen"><span>{{output}}</span></div>
    <div class="number-pad">
      <button @click="inputNumber">1</button>
      <button @click="inputNumber">2</button>
      <button @click="inputNumber">3</button>
      <button @click="deleteNum">删除</button>
      <button @click="inputNumber">4</button>
      <button @click="inputNumber">5</button>
      <button @click="inputNumber">6</button>
      <button @click="clearAll">清空</button>
      <button @click="inputNumber">7</button>
      <button @click="inputNumber">8</button>
      <button @click="inputNumber">9</button>
      <button @click="ok" class="ok">OK</button>
      <button  @click="inputNumber" class="zero">0</button>
      <button @click="inputNumber" class="dot">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';

    inputNumber(event: MouseEvent) {
      if (event.target) {
        const button = (event.target as HTMLButtonElement);
        const currentNum = button.textContent as string;
        if (this.output.length === 16) {
          return;
        }
        if (this.output.indexOf('.') >= 0) {
          if (currentNum === '.') {
            return;
          }
        }
        if (this.output === '0') {
          if (currentNum === '0') {
            return;
          } else if ('123456789'.indexOf(currentNum) >= 0) {
            this.output = currentNum;
            return;
          } else {
            this.output += currentNum;
          }
        } else {
          this.output += currentNum;
          return;
        }

      }
    }

    deleteNum() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }

    clearAll() {
      this.output = '0'
    }

    ok() {
      console.log('ok')
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
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

      &:nth-child(8), &:nth-child(11) {
        background-color: darken($bg, 16%);
      }

    }

    .ok {
      height: 100px;
      float: right;
      background-color: darken($bg, 24%);
    }

    .zero {
      width: 50%;
      background-color: darken($bg, 16%);
    }

    .dot {
      background-color: darken($bg, 20%);
    }
  }

  .screen {
    @extend %innerShadow;
    padding: 12px 5px 12px 0;
    font-size: 32px;
    font-family: Consolas, monospace;
    text-align: right;

  }
</style>