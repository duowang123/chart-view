<template>
  <!--用的element-ui-->
  <div>
    <charts></charts>
  </div>
</template>
<script>
import charts from '../src/view/charts'
export default {
  name: 'App',
  data () {
    return {
      dragData: {},
      dragOption: {
        group: {
          name: 'components', // 这个很重要，其他的与之能产生关联的拖拽框就靠这name 一定要一致
          pull: 'clone',
          put: false
        },
        sort: false // 默然为true。这里我们只需要他拖拽，无需能拖动排序
      }
    }
  },
  components: {
    charts
  }
}
</script>

<style>
.mainWrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: red;
}
</style>
