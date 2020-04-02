<template>
  <LayoutNav class="layout-nav">
    {{recordList}}
    <NumberPad @update:value="onUpdateAmount" @save="saveOneRecord"/>
    <Types :type.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tags-source.sync="tagsSource" @update:value="onUpdateTags"/>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Labels from '@/views/Labels.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  type Record = {
    tags: string[];
    type: string;
    notes: string;
    amount: number;
    createDate: Date;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad, Labels}
  })
  export default class Money extends Vue {
    tagsSource: string[] | undefined = ['衣', '食', '住', '行', '玩'];
    record: Record = {tags: [], type: '-', notes: ' ', amount: 0};
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }


    saveOneRecord() {
      const deepClone: Record = JSON.parse(JSON.stringify(this.record));
      deepClone.createDate = new Date();
      this.recordList.push(deepClone);
      console.log(this.recordList);
      if (this.recordList) {
        window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
      }
    }

  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

