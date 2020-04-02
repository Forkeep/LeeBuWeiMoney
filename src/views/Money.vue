<template>
  <LayoutNav>
      <ul class="tags">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
    <div class="notes">
      <label><span >备注</span><input type="text" value=""/>
      </label>
    </div>
      <ul class="types">
        <li>收入</li>
        <li>支出</li>
      </ul>
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
      <button>OK</button>
      <button>0</button>
      <button>.</button>
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

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

</style>