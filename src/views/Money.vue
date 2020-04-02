<template>
  <LayoutNav class="layout-nav">
    <NumberPad/>
    <Screen/>
    <Types/>
    <Notes/>
    <New/>
    <Tags/>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Labels from '@/views/Labels.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Screen from '@/components/Money/Screen.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import New from '@/components/Money/New.vue';
  import Tags from '@/components/Money/Tags.vue';

  @Component({
    components: {Tags, New, Notes, Types, Screen, NumberPad, Labels}
  })
  export default class Money extends Vue {
  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

