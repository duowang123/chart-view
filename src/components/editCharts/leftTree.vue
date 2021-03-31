<template>
  <div>
    <el-tree
      :data="dataSet"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <span class="custom-tree-node" slot-scope="{ data }">
        <span v-if="data.children" style="cursor: not-allowed;">
          {{ data.label }}</span
        >
        <draggable
          :data="data"
          :key="data.id"
          @dragstart="onSourceDragStart"
          @dragsend="onSourceDragEnd"
          v-else
        >
          <div class="drag-content">{{ data.label }}</div>
        </draggable>
      </span>
    </el-tree>
  </div>
</template>
<script>
// 按钮组件，
import Draggable from './draggable'
export default {
  components: {
    Draggable
  },
  props: {
    // 父组件传入的参数
    dataSet: Array
  },
  methods: {
    onSourceDragStart (params) {
      console.log(params)
      console.log('被拖动元素监听到拖动开始')
    },
    onSourceDragEnd (params) {
      console.log('被拖动元素监听到拖动结束')
    }
  }
}
</script>
