<template>
  <div>
    <droppable
      class="drop-box-wrapper"
      v-for="(item, index) in coordinate"
      :key="index"
      :index="index"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drop="onDrop"
      @dragenter="onDragEnter"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <customCascader
        v-for="(e, i) in item[`${item.type}List`]"
        :key="i"
        :index="i"
        @handlerDelete="handlerDelete(i, item[`${item.type}List`])"
        :config="e"
      />
    </droppable>
  </div>
</template>

<script>
import Droppable from './droppable' // form后面的地址根据实际情况而定
import customCascader from '@/components/editCharts/customCascader'
export default {
  components: {
    Droppable,
    customCascader
  },
  props: {
    coordinate: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handlerDelete (i, item) {
      item.splice(i, 1)
    },
    onDragStart (params) {
      console.log('监听到拖动开始')
    },
    onDragEnd (params) {
      console.log('监听到拖动结束')
    },
    onDrop (params, index) {
      const type = `${this.coordinate[index].type}`
      const { data } = params
      console.log(type)
      const isRepeat = this.coordinate[index][`${type}List`].some(
        (e) => e.label === data.label
      )
      if (isRepeat) {
        return this.$message('不能重复')
      }
      this.coordinate[index][`${type}List`].push(data)
    },
    onDragEnter (params) {
      console.log('监听到被拖动元素进入当前范围')
    },
    onDragOver (params) {
      // console.log('监听到被拖动元素在上方移动, 这个调用调多次就不打印了')
    },
    onDragLeave (params) {
      console.log('监听到被拖动元素离开当前范围')
    }
  }
}
</script>

<style></style>
