<template>
  <div class="root">
    <div class="top"><el-button type="primary">保存</el-button></div>
    <div class="main-left">
      <leftTree :dataSet="chartSetting.dataSets" />
    </div>
    <div class="drop-box">
      <draggableTop :coordinate="chartSetting.coordinate" />
      <div class="content">
        <chartView ref="chartView" :option="chartSetting.options" />
      </div>
    </div>
    <div class="main-right">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane
          :label="item.label"
          v-for="(item, index) in chartSetting.attrs"
          :key="index"
          :name="item.componentsName"
        >
          <component
            v-bind:is="activeName"
            :attr="item"
            :chartType.sync="chartSetting.chartType"
            @updateCharts="updateCharts"
          ></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import dragApi from '../dragapi/dragapiTree.js'
import draggableTop from '@/components/editCharts/draggableTop'
import leftTree from '@/components/editCharts/leftTree'
import pubilcAttr from '@/components/editCharts/publicAttr'
import chartsAttr from '@/components/editCharts/chartAttr/index'
import chartView from '@/components/editCharts/chart'
export default {
  components: {
    draggableTop,
    leftTree,
    pubilcAttr,
    chartView,
    ...chartsAttr
  },
  data () {
    return {
      activeName: 'pubilcAttr',
      data: dragApi,
      chartSetting: {
        chartType: 'bar',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          grid: {
            left: 50,
            right: 50
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'line'
            }
          ]
        },
        dataSets: dragApi,
        attrs: [
          {
            label: '公共属性',
            componentsName: 'pubilcAttr',
            titleObj: {
              name: '我是图形1'
            }
          },
          {
            label: '图形属性',
            componentsName: 'histogramAttr'
          }
        ],
        coordinate: [
          {
            title: '维度',
            id: '1',
            type: 'dimension',
            dimensionList: [
              {
                id: 9,
                label: '三级 1-1-1',
                cascaderConfig: {
                  options: [
                    {
                      value: 'zhinan',
                      label: '指南1-1-1',
                      children: [
                        {
                          value: 'shejiyuanze',
                          label: '设计原则'
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            title: '维度',
            id: '2',
            type: 'measure',
            measureList: [
              {
                id: 10,
                label: '三级 1-1-2',
                cascaderConfig: {
                  options: [
                    {
                      value: 'zhinan',
                      label: '指南1-1-2',
                      children: [
                        {
                          value: 'shejiyuanze',
                          label: '设计原则'
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    updateCharts (chartType) {
      this.$nextTick(() => {
        const { options, attrs } = this.chartSetting
        const { series } = options
        series[0].type = chartType
        const title = {
          text: attrs[0].titleObj.name,
          top: 10,
          left: 10
        }
        Object.assign(options, { title })
        this.$refs.chartView.updateCharts()
      })
    }
  },
  mounted () {
    this.updateCharts(this.chartSetting.chartType)
  }
}
</script>

<style>
.root {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.top {
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  right: 0;
  text-align: right;
}
.el-button {
  margin-right: 10px;
  margin-top: 10px;
}
.main-left {
  width: 300px;
  /* position: relative;
  top: 0;
  left: 0;
  bottom: 0; */
  display: inline-block;
  height: 100%;
  border-right: 1px solid #dcdfe6;
  border-top: 1px solid #dcdfe6;
  padding: 10px 0;
}
.main-right {
  width: 300px;
  /* position: relative;
  top: 0;
  left: 0;
  bottom: 0; */
  display: inline-block;
  height: 100%;
  border-left: 1px solid #dcdfe6;
  border-top: 1px solid #dcdfe6;
  padding: 0;
}
.drop-box {
  flex: 1;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  border: 1px solid #dcdfe6;
  margin: 10px 0 5px 0;
  position: relative;
}
.drop-box-wrapper {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  min-height: 50px;
  margin-bottom: 10px;
  /* padding: 5px; */
}
.el-tabs__nav {
  width: 100%;
  border-top: 0 !important;
}
.el-tabs__item {
  width: 50%;
  text-align: center;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-bottom: 1px solid #e4e7ed !important;
}
.el-tabs__content {
  padding: 0 10px;
}
</style>
