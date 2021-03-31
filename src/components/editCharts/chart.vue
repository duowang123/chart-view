<template>
  <div>
    <div id="myChart"></div>
  </div>
</template>
<script>
// 按钮组件，
export default {
  props: ['option'],
  methods: {
    updateCharts () {
      this.loading = true
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      this.myChart = myChart
      this.myChart.setOption(this.option)
    }
  }
}
</script>
<style>
#myChart {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
