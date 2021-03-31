<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="活动名称" v-if="attr.titleObj">
        <el-input v-model="attr.titleObj.name"></el-input>
      </el-form-item>
      <el-form-item label="图表类型" v-if="attr.titleObj"> </el-form-item>
      <el-checkbox-group v-model="type" @change="handlerChange">
        <el-checkbox-button
          :label="item.type"
          v-for="(item, index) in chartTypeList"
          :key="index"
        >
          {{ item.name }}</el-checkbox-button
        >
      </el-checkbox-group>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    // 父组件传入的参数
    attr: {
      type: Object,
      default: () => {}
    },
    chartType: {
      type: String
    }
  },
  created () {
    this.$nextTick(() => {
      this.type = [this.chartType]
    })
  },
  data () {
    return {
      type: [],
      chartTypeList: [
        {
          name: '柱状图',
          type: 'bar'
        },
        {
          name: '折线图',
          type: 'line'
        }
      ]
    }
  },
  methods: {
    handlerChange (val) {
      if (val.length > 1) {
        val.splice(0, 1)
        this.$emit('update:chartType', val[0])
        this.$emit('updateCharts', val[0])
      }
    }
  }
}
</script>
