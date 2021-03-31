<template>
  <el-popover placement="bottom" popper-class="custom-popper" trigger="click">
    <el-cascader-panel
      :options="config.cascaderConfig.options"
    ></el-cascader-panel>
    <div class="draggable-node" slot="reference">
      <span class="label">{{ config.label }}</span>
      <i class="el-icon-circle-close" @click="$emit('handlerDelete')"></i>
    </div>
  </el-popover>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      require: true
    }
  }
}
</script>
<style>
.draggable-node {
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  background: #409eff;
  cursor: pointer;
  color: #fff;
}

.draggable-node:after {
  content: '';
  position: absolute;
  left: 100%;
  top: 0;
  display: block;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-left: 5px solid #409eff;
  border-bottom: 15px solid transparent;
}
.custom-popper {
  padding: 0;
}
</style>
