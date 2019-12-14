<template>
  <div>
    <div>{{vTest}}</div>
    <button @click="toParent">向父组件发送信息</button>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world" width="500px">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['vTest'],
  name: 'testCom',
  data () {
    return {
      msg: '子--->父！！！',
      visible: false,
      refMsg: '父组件通过ref获取子组件信息'
    }
  },
  methods: {
    toParent () {
      this.$emit('toParent', this.msg)
    },
    do () {
      alert('父调用子组件方法！！！')
    }
  }
}
</script>

<style>

</style>
