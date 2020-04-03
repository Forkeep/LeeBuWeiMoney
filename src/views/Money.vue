<template>
  <LayoutNav class="layout-nav">
    <NumberPad @update:value="onUpdateAmount" @save="saveOneRecord"/>
    <Types :type.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tags-source.sync="tagsSource" @update:value="onUpdateTags" @createLabel="createLabel"/>
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
  import {recordModel} from '@/models/RecordModel';
  import {labelModel} from '@/models/LabelsModel';

  @Component({
    components: {Tags, Notes, Types, NumberPad, Labels}
  })
  export default class Money extends Vue {
    tagsSource = labelModel.fetch();
    record: RecordItem = {tags: [], type: '-', notes: ' ', amount: 0, createDate: undefined};
    recordList = recordModel.fetch();

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
      const deepClone = recordModel.deepClone(this.record);
      deepClone.createDate = new Date();
      this.recordList.push(deepClone);
      if (this.recordList) {
        recordModel.saveRecord(this.recordList);
      }
    }

    createLabel(value: string[]) {
      const newLabel = value.pop();
      labelModel.saveLabel(this.tagsSource,newLabel as string);
    }

  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

