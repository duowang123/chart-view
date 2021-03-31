<template>
  <div class="btn-box ui-sortable sortItem">
    444555555
  </div>
</template>
<script>
// 按钮组件，
export default {
  name: 'Btn',
  props: {
    // 父组件传入的参数
    content: Object,
    oStyle: Object,
    aIndex: Number
  },
  data () {
    return {
      btnModel: 'btn-model'
    }
  }
}
</script>
