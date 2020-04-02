<template>
  <div class="notes">
    {{value}}

    <label><span class="beizhu"><strong>备注</strong></span><input type="text" v-model="value" placeholder="请在这里输入备注"/>
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
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

</style>